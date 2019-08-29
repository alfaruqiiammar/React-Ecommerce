import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home1 from "./pages/Home1/Home";
import { connect } from "unistore/react";
import { actions } from "./store";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/signup";
import Header from "./component/Header";
import Intro from "./pages/intro/Home";
import Profile from "./pages/profile/Profile";
import Detail from "./pages/detail/detail";
import Checkout from "./pages/checkout/checkout";
import Invoice from "./component/invoice";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./component/footer";
import Donasi from "./component/listDonasi";
import AddItem from "./component/tambahBarang";
import Transaksi from "./component/listtransaksi";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home1} />
          <Route exact path="/" component={Intro} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/checkout/:item_id" component={Checkout} />
          <Route path="/profile" component={Profile} />
          <Route path="/invoice/:item_id" component={Invoice} />
          <Route path="/donasi" component={Donasi} />
          <Route path="/item/:item_id" component={Detail} />
          <Route path="/add" component={AddItem} />
          <Route path="/trans" component={Transaksi} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
