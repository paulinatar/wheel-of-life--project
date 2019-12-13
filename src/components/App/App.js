import React,{Component} from 'react';


import {HashRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Navigations from '../Navigations/Navigations'
import EntryForm from "../EntryForm/FormEntry"
import NowWheel from "../NowWheel/NowWheel"
import FutureWheel from "../FutureWheel/FutureWheel"
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
