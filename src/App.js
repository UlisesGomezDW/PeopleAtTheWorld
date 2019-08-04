import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/homepage/navbar/navbar';
import Home from './components/homepage/home/home';
import Cards from './components/content/cards';
import Form from './components/context/form/form';
import Footer from './components/homepage/footer/footer';
import About from './components/content/about/about';
class App extends Component {
 
  render(){
    return (
      <div className="App">
        <NavBar/>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Form} />
          <Route exact path="/known" component={Cards} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
