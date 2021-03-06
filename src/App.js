import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import UserLsting from './components/layout/UserListing';
import UserAdding from './components/layout/UserAdding';
import UserDetail from './components/layout/UserDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="c-wrapper">
            <Route exact path="/" component={UserLsting} />
            <Route exact path="/adduser" component={UserAdding} />
            <Route exact path="/edituser/:id" component={UserDetail} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
