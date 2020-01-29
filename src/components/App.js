import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
  
  return (
    <div className="App">
    <Header />
    <Login />
    <Home />
    <Register />
    </div>
    
  );
  }
}

export default App;
