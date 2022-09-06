import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // retrive the part of the state

  return (
    <Fragment>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
