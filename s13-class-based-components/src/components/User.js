import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!"); // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// class-based components can work togther with function-based components
// a class-based component could render a function-based component

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
