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
import Bookappointment from './Container/appointment/Bookappointment';
import Login_signup from './Container/Loginsignup/Login_signup';
import Medicines from './Container/Medicines/Medicines';
import Reference from './Container/Reference/Reference';
import ListAppointment from './Container/appointment/ListAppointment';

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
      <Route path={"/bookappointment"} exact component={Bookappointment}></Route>
      <Route path={"/loginsignup"} exact component={Login_signup}></Route>
      <Route path={"/medicines"} exact component={Medicines}></Route>
      <Route path={"/reference"} exact component={Reference}></Route>
      <Route path={"/listappointment"} exact component={ListAppointment}></Route>

    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
