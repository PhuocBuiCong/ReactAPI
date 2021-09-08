import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
class App extends Component {

  showContentMenu = (routes) =>{
    var results =null;
    if (routes.length>0){
      results = routes.map((route, index)=>{ 
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{results}</Switch>
  }

  render() {
    return (
      <Router>
      <div>
        <Menu/>
        <div className="container mt-5">
          <div className="row">          
            {this.showContentMenu(routes)}
          </div>
        </div>
      </div>
     </Router>
    )
  }
}

export default App;