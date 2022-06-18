import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Docters from './Container/Docters/Docters';
import Contact from './Container/Contact/Contact';
import About from './Container/About/About';
import Appointment from './Container/appointment/Appointment';
import Login_signup from './Container/Loginsignup/Login_signup';
import Medicines from './Container/Medicines/Medicines';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route path={"/"}  exact component={Home}></Route>
      <Route path={"/department"} exact component={Department}></Route>
      <Route path={"/docters"} exact component={Docters}></Route>
      <Route path={"/about"} exact component={About}></Route>
      <Route path={"/contact"} exact component={Contact}></Route>
      <Route path={"/appointment"} exact component={Appointment}></Route>
      <Route path={"/loginsignup"} exact component={Login_signup}></Route>
      <Route path={"/medicines"} exact component={Medicines}></Route>

    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
