import React from 'react';
import { createRoot, HashRouter, Route, Routes, Link} from "react-router-dom";
import Header from './Header';
import StartPage from './StartPage';
import SubPage from './SubPage';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';

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
          <Route path='/Sub/3'element = {<Ex3 />}></Route>
          <Route path='/Sub/4'element = {<Ex4 />}></Route>
          <Route path='/Sub/5'element = {<Ex5 />}></Route>
          <Route path='/Sub/6'element = {<Ex6 />}></Route>
        </Routes>
      </div>
    );
  }
}