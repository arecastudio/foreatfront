import React,{useState,useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
//  Link,
} from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";

import mainlogo from './mainlogo.svg';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import About from './components/pages/About';
import Store from './components/pages/Store';
import Toko from './components/pages/Toko';
import News from './components/pages/News';
import Newsdetail from './components/pages/Newsdetail';
import Member from './components/pages/Member';

function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    try{
      //axios.get(`http://localhost:8000/store/?query={id, slug, title, cover, isActive}`)
      axios.get(`http://localhost:3006/dummy/store.json`)
      .then(res => {
        const response = res.data;
        //this.setState({stores:response})
        setData(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }
  },[]);


  return (
    <Router>

    <nav id="topdiv" className="navbar navbar-expand-lg navbar-light shadow bg-white fixed-top" style={{display:''}}>
      <a href="/" className="logoXXX mr-auto"><img src={mainlogo} alt="" className="img-fluid" style={{width:64,}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Eat & Drink
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {
                data.map((dt,x)=>{
                  if(dt.isActive==true){
                    return(
                      <a key={x} className="dropdown-item text-info" href={`/eat-drink/${dt.slug}`}>{dt.title}</a>
                    )
                  }

                })
              }
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Show All</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Fishop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/news">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/member">Membership</a>
          </li>
{/*
          <li className="nav-item">
            <a className="nav-link" href="/">Gallery</a>
          </li>
*/}
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
{/*
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  */}
      </div>
    </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
      <Route path="/about" component={About} exact />
      <Route path="/toko/:storeid" component={Toko} exact />
      <Route path="/eat-drink/:storeid" component={Store} />
      <Route path="/news" component={News} exact />
      <Route path="/news/:newsid" component={Newsdetail} />
      <Route path="/member" component={Member} exact />

    <Footer/>

    <a href="#topdiv" className="back-to-top"><i className="icofont-simple-up"></i></a>

    </Router>
  );
}

export default App;
