import React, { Component } from 'react'
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;




export default class App extends Component { 

  state={

  }

  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".preload").classList.add("hide");
      document.querySelectorAll(".nav-item").forEach(link => link.addEventListener("click", function() {
        clicked = !clicked;
        
        if(clicked) {
          img.src = "images/icons8-delete-30.png"
          console.log("open")
      }else {
      img.src = "images/hamburger.png"
        }
      })
      )
    }, 5000)
    
    console.log("hidee")
    let hand = document.querySelector(".hand")
    let img = document.querySelector(".hand img")
    let clicked = false;

    hand.addEventListener("click", function() {
    clicked = !clicked
  
    if(clicked) {
        img.src = "images/icons8-delete-30.png"
        console.log("open")
    }else {
    img.src = "images/hamburger.png"
      }
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar />
            <div class="preload">
                <img src="images/Ripple-2.6s-231px.svg" width=""></img>
                <h1>Welcome...</h1>
            </div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/portfolio" component={Portfolio}></Route>
              <Route exact path="/resume" component={Resume}></Route>
              <Route exact path="/services" component={Services}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
}

