// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/header/Header';
// import Footer from './Components/footer/Footer';
// import Home from './Container/home/Home';
// import { Route, Switch } from 'react-router-dom';
// import Department from './Container/Department/Department';
// import Docters from './Container/Docters/Docters';
// import Contact from './Container/Contact/Contact';
// import About from './Container/About/About';
// import Bookappointment from './Container/appointment/Bookappointment';
// import Login_signup from './Container/Loginsignup/Login_signup';
// import Medicines from './Container/Medicines/Medicines';
// import Reference from './Container/Reference/Reference';
// import ListAppointment from './Container/appointment/ListAppointment';
// import PublicRoute from './Route/PublicRoute';
// import PrivateRoute from './Route/PrivateRoute';
// import { Provider } from 'react-redux';
// import { store } from './redux/Store';
// import ToggleContext from './Context/ThemeContext';
// import { SnackbarProvider } from 'notistack';

// function App() {
//   return (
//     <div>
//       <SnackbarProvider maxSnack={3}>
//         <ToggleContext>
//           <Header />
//           <Switch>
//             <Provider store={store}>
//               <PublicRoute path={"/"} exact component={Home} />
//               <PublicRoute path={"/department"} exact component={Department} />
//               <PublicRoute path={"/docters"} exact component={Docters} />
//               <PublicRoute path={"/about"} exact component={About} />
//               <PublicRoute path={"/contact"} exact component={Contact} />
//               <PublicRoute path={"/loginsignup"} exact restricted={true} component={Login_signup} />
//               <PublicRoute path={"/medicines"} exact component={Medicines} />
//               <PublicRoute path={"/reference"} exact component={Reference} />
//               <PrivateRoute path={"/bookappointment"} exact component={Bookappointment} />
//               <PrivateRoute path={"/listappointment"} exact component={ListAppointment} />
//             </Provider>
//           </Switch>
//           <Footer />
//         </ToggleContext>
//       </SnackbarProvider>
//     </div>
//   );
// }

// export default App;


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
import Reference from './Container/Reference/Reference';
import ToggleContext from './Context/ThemeContext';

function App() {
  return (
    <div>
    <ToggleContext>
    <Header />
    <Switch>
      <Route path={"/"}  exact component={Home}></Route>
      <Route path={"/department"} exact component={Department}></Route>
      <Route path={"/docters"} exact component={Docters}></Route>
      <Route path={"/about"} exact component={About}></Route>
      <Route path={"/contact"} exact component={Contact}></Route>
      <Route path={"/appointment"} exact component={Appointment}></Route>
      <Route path="/loginsignup" exact component={Login_signup}></Route>
      <Route path={"/medicines"} exact component={Medicines}></Route>
      <Route path={"/reference"} exact component={Reference}></Route>
    </Switch>
    <Footer/>
    </ToggleContext>
    </div>
  );
}

export default App;