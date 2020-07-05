import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import UserList from './components/pages/UserList';
import RegisterState from './context/register/RegisterState';
import ImageUpload from './components/pages/ImageUpload';
import SendEmail from './components/pages/SendEmail';

const App = () => {
  return (
    <RegisterState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user-data' component={UserList} />
              {/* <Route exact path='/upload-image' component={ImageUpload} /> */}
              {/* <Route exact path='/email' component={SendEmail} /> */}
            </Switch>
          </div>
        </Fragment>
      </Router>
    </RegisterState>
  );
};

export default App;
