import React, { Component } from 'react'
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;




export default class App extends Component { 

  state = {
    clicked : false
  }
  handlenav = () => {
    this.setState(prev => ({
      clicked : !prev.clicked
    }))
    console.log("clicked");
    console.log(this.state.clicked)
  }
  handleclose = () => {
    this.setState(prev => ({
      clicked : !prev.clicked
    }))
  }
  componentDidMount() {
    window.onload = function() {
      document.querySelector(".preload").classList.add("hide");
    }
    let navLinks = document.querySelectorAll(".nav-item")
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
          navLinks.forEach(function(links) {
              links.classList.remove("active");
          })
          link.classList.add("active");
          
      })
  })
    if(this.state.clicked) {
      console.log("we have it")
    }
    
  }
  render() {
    
    return (
      <BrowserRouter>
        <div>
        <NavBar handlenav = {this.handlenav} state = {this.state}/>
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
        <Footer />
        </div>
      </BrowserRouter>
      
    )
  }
}

