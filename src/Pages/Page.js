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
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import Ex10 from './Ex10';
import Ex11 from './Ex11';
import Ex12 from './Ex12';
import Help from './Help';

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
          <Route path='/Sub/help'element={<Help />}></Route>
          <Route path='/Sub/1'element = {<Ex1 />}></Route>
          <Route path='/Sub/2'element = {<Ex2 />}></Route>
          <Route path='/Sub/3'element = {<Ex3 />}></Route>
          <Route path='/Sub/4'element = {<Ex4 />}></Route>
          <Route path='/Sub/5'element = {<Ex5 />}></Route>
          <Route path='/Sub/6'element = {<Ex6 />}></Route>
          <Route path='/Sub/7'element = {<Ex7 />}></Route>
          <Route path='/Sub/8'element = {<Ex8 />}></Route>
          <Route path='/Sub/9'element = {<Ex9 />}></Route>
          <Route path='/Sub/10'element = {<Ex10/>}></Route>
          <Route path='/Sub/11'element = {<Ex11/>}></Route>
          <Route path='/Sub/12'element = {<Ex12/>}></Route>
        </Routes>
      </div>
    );
  }
}