import './App.css'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import { useEffect } from 'react';
import WebFont from "webfontloader";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
          <Routes>
          <Route exact path="/"  Component={Home}/>
          </Routes>
      <Footer />
    </Router>
  )
}

export default App
