import React from 'react';

import Home from './components/Home'
import Details from './components/Details'
import List from './components/List'
import Footer from './components/Footer'
import AppForm from './components/Form'
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/ConfigureStore'

const store = configureStore()

function App() {
  return (

    <Provider store={store}>
    <Router>    
    <Container fluid>
    <Navigation></Navigation>
    
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/form" component={AppForm}></Route>
    <Route path="/list" component={List}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/details/:appointmentId" component={Details}></Route>
    </Switch>
    <Footer></Footer>
    
    
    
    </Container>    
    </Router>
    </Provider>
    
   
  );
}



export default App;
