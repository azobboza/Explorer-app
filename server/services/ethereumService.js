const { saveData } = require('./dataService');
const Web3 = require('web3');
var web3 = new Web3('https://rinkeby.infura.io/v3/8f77da61c0d0433587415d174e046a04');
const web3HttpProvider = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
const subscribeAddresses = [];

 async function getDataFromEthAndSaveToDb (address, next) {
    try {
        const latestBlockNumber = await web3.eth.getBlockNumber(); //4898631
        const givenBlockNumber = 4898630;
        const countOfBlocks = latestBlockNumber - givenBlockNumber;
        subscribeAddresses.push(address);
    
        for (let i = 0; i <= countOfBlocks; i++) {
            const block = await web3.eth.getBlock(latestBlockNumber - i);

            if(block.transactions !== null){
                for(const transaction of block.transactions){
                    const tranDetails = await web3.eth.getTransaction(transaction);
                    if (tranDetails.from === address || tranDetails.to === address) {
                        await saveData({    
                            address: address,
                            blockNumber: block.number,
                            from: tranDetails.from,
                            to: tranDetails.to,
                            eth: web3.utils.fromWei(tranDetails.value, 'ether')
                        }, next);
                    }
                }
            };
        };   
    } catch (err) {
        next(err);
    }
}; 

async function subscribe(next){
    try {
        web3HttpProvider.eth.subscribe('newBlockHeaders', async (error, event) => {
            if(error)
                return next(error);
            const latestBlockNumber = await web3.eth.getBlockNumber();
            const block = await web3.eth.getBlock(latestBlockNumber);

            if(block.transactions !== null){
                for(const transaction of block.transactions){
                    const tranDetails = await web3.eth.getTransaction(transaction);
                    const address = findAddress(subscribeAddresses, tranDetails);
                    if (address) {
                        await saveData({    
                            address: address,
                            blockNumber: block.number,
                            from: tranDetails.from,
                            to: tranDetails.to,
                            eth: web3.utils.fromWei(tranDetails.value, 'ether')
                        }, next);
                    }
                }
            }
        });   
    } catch (err) {
        next(err);
    }
};

function findAddress(addresses, tranDetails){
     addresses.find( 
        address => { 
            return address === tranDetails.from || address === tranDetails.to
        }
    );
}

exports.getDataFromEthAndSaveToDb = getDataFromEthAndSaveToDb;
exports.subscribe = subscribe;
