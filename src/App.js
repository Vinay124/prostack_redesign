import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
// import Login from './pages/Login'
import Blog from './pages/Blog'
// courses
import FullStack_Development from './Courses/FullStack_Development'
import JavaFullStack from './Courses/JavaFullStack'
import MERN_FullStack from './Courses/MERN_FullStack'
import Python_FullStack from './Courses/Python_FullStack'
import ReactJs from './Courses/ReactJs'

// Error Pages


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' component={Home} exact></Route>
          {/* <Route path='/Login' component={Login}></Route> */}
          <Route path='/Register' component={Register}></Route>
          <Route path='/Blog' component={Blog}></Route>
          {/* Courses */}
          <Route path='./FullStack_Development' component={FullStack_Development}></Route>
          <Route path='./JavaFullStack' component={JavaFullStack}></Route>
          <Route path='./ReactJS' component={ReactJs}></Route>
          <Route path='./Python_FullStack' component={Python_FullStack}></Route>
          <Route path='./MERN_FullStack' component={MERN_FullStack}></Route>
      </Switch>
      </Router>  
  </>
  );
}

export default App;
