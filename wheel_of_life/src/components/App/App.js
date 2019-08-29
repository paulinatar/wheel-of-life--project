import React,{Component} from 'react';


import {HashRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Navigations from '../Navigations'
import EntryForm from "../Layout/FormEntry"
import NowWheel from '../Layout/NowWheel'
import FutureWheel from '../Layout/FutureWheel'
import './App.scss'



const NotFound =()=> <h2>404 strony nie znaleziono</h2>;

function App() {
  return (
      <HashRouter>
        <Navigations />
        <Switch>
          <Route exact path ='/' component = {EntryForm}/>
          <Route path = '/now' component = {NowWheel}/>
          <Route path = '/future' component = {FutureWheel}/>
            <Route component ={NotFound}/>



        </Switch>



      </HashRouter>)

}

export default App;
