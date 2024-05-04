import React from 'react';
import { createRoot, HashRouter, Route, Routes, Link} from "react-router-dom";
import Header from './Header';
import StartPage from './StartPage';
import SubPage from './SubPage';
import Ex1 from './Ex1';
import Ex2 from './Ex2';

export default class Page extends React.Component {
  constructor(props){
    super(props)
    this.state= {
    }
  }
  render(){
    return (
        <div>
        <Header />
        <Routes>
          <Route path='/' element = {<StartPage />}></Route>
          <Route path='/Sub' element = {<SubPage />}></Route>
          <Route path='/Sub/1'element = {<Ex1 />}></Route>
          <Route path='/Sub/2'element = {<Ex2 />}></Route>
        </Routes>
      </div>
    );
  }
}