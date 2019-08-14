 const { Data } = require('../models/data');

async function saveData(value, next) {
  const data = new Data({...value})
  try {
    await data.save();
  }
  catch(ere){
    next(err);
  }
}

async function getData(address, next)
{
  try{
     const data = await Data.find({address: address}).sort({blockNumber: 1});
     return data;
  }
  catch(err){
    next(err);
  }
}

module.exports.saveData = saveData;
module.exports.getData = getData;
