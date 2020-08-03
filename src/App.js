import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import Product from './Components/Product/Product';
import Employee from './Components/Employee/Employee';
import Albums from './Components/Albums/Albums';
import Posts from './Components/Posts/Posts';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    let homeContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

    return (
      <BrowserRouter>
        <div >
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav">
                  <li className="nav-item active"><Link className="nav-link" to="/"> Home</Link> </li>
                  <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/employee">Employee</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/albums">Albums</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>

                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><Link className="nav-link " to="/contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link " to="/about">About</Link></li>
                </ul>
              </div>
            </nav>
          </header>
          <Route path="/" exact render={() => <div className="container">
            <h3>Home</h3>
            {homeContent}
          </div>} />
          <Route path="/product" exact component={Product} />
          <Route path="/employee" exact component={Employee} />
          <Route path='/albums' exact component={Albums} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </div>
        
      </BrowserRouter>
    )
  }
}

export default App;
