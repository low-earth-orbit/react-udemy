import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBounday from "./ErrorBounday";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }

  componentDidMount() {
    //send http request
    this.setState({
      filteredUsers: this.context.users,
    });
  } // run only once for the first time rendered

  componentDidUpdate(prevProps, prevState) {
    // // this try and catch only works in regular class-based component
    // try {
    //   // someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }

    if (prevState.searchTerm !== this.state.searchTerm) {
      // check if the state of interest has changed
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  } // in lieu of useEffect

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBounday>
          <Users users={this.state.filteredUsers} />
        </ErrorBounday>
      </Fragment>
    );
  }
}

export default UserFinder;
