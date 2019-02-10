import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import Layout from './components/common/Layout/Layout';
import MainPage from "./containers/MainPage";
import UserManagement from './containers/UserManagement';
import NoPageFound from './containers/NoPageFound';


class App extends Component {


  render() {

        return (
              <BrowserRouter>
                  <Layout>
                    <Switch>
                        <Route exact path="/" render={(props) => <MainPage {...props}/>}/>
                        <Route exact path="/login" render={(props) => <UserManagement {...props}/>}/>
                        <Route exact path="/login" render={(props) => <UserManagement {...props}/>}/>
                        <Route component={NoPageFound}/>
                    </Switch>
                  </Layout>
              </BrowserRouter>
        );
  }
}

export default App;
