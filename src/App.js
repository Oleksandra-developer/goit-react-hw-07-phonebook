import React, { Component } from "react";
import Form from "./components/Form/Form";
import styles from "./components/container.module.css";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { connect } from "react-redux";
import { getLoading } from "./components/redux/phonebook/contacts-selectors";
import { fetchContacts } from "./components/redux/phonebook/phonebook-operation";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    // console.log(state);
    return (
      <section className={styles.container}>
        <h1>Phonebook</h1>
        {this.props.isLoadingContacts && <h1>Downloading...</h1>}
        <Form />
        <h2>Contact List</h2>
        <Filter />
        <ContactsList />
      </section>
      // </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
