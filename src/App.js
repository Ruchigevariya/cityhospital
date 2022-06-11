import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Docters from './Container/Docters/Docters';
import Contact from './Container/Contact/Contact';
import About from './Container/About/About'

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route path={"/"}  exact component={Home}></Route>
      <Route path="/Department" exact component={Department}></Route>
      <Route path="/Docters" exact component={Docters}></Route>
      <Route path="/About" exact component={About}></Route>
      <Route path="/Contact" exact component={Contact}></Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
