import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//router
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import { UserContext } from "./context/UserContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

import firebaseconfig from "./Config/FirebaseConfiguration";
//initializing firebase app
firebase.initializeApp(firebaseconfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Navigation />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
