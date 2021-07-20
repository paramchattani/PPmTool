import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import {BrowserRouter as Router,Route}  from 'react-router-dom'
import AddProject from './components/Projects/AddProject';
import {connect, Provider} from 'react-redux'
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">

<Header/>
<Route exact path="/dashboard" component={Dashboard}/>
<Route exact  path="/addProject" component={AddProject}/>    
    </div>
    </Router>
    </Provider>
  );
  
}

export default App;
