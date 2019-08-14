import React, { Component } from "react";
import httpService from "./services/httpService";
import config from "./config.json";
import SearchForm from "./components/searchForm";
import Transactions from "./components/transactions";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 10,
    account: {
      address: "",
      blockNumber: ""
    },
    errors: {},
    loading: false
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.address.trim() === "") errors.address = "Address is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const account = { ...this.state.account };
    this.setState({ loading: true });
    const { data } = await httpService.get(config.apiEndpoint + account.address);
    this.setState({data: data, loading: false})
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  async componentDidMount() {
    //optimistic/pesimistic lesson code with mosh - react

    //const { data } = await httpService.get(config.apiEndpoint + );
    //console.log(data);

    //Expected(400, 404) - client errors
    //----Display specific error message
    // if (ex.response && ex.response.status === 404) alert("somehting");
    // else {
    //   console.log("Unexpected error", ex);
    //   alert("An expected error occurred");
    // }

    //Unexpected(network down, server down, db dawn, bug)
    //----Log them
    //----Display generic and friendly error message to the user

    //this.setState({data: data})
  }

  render() {
    const { currentPage, pageSize, data, account, errors, loading } = this.state;
    return (
      <main className="container">
        <SearchForm
          account={account}
          errors={errors}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          loading={loading}
        />
        <Transactions
          currentPage={currentPage}
          pageSize={pageSize}
          data={data}
          handlePageChange={this.handlePageChange}
        />
      </main>
    );
  }
}

export default App;
