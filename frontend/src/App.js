import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './Website/Header';
import Banner from './Website/Banner';
import Intro from './Website/Intro';
import FunFact from './Website/FunFact';
import Speakers from './Website/Speakers';
import Experience from './Website/Experience';
import Schedule from './Website/Schedule';
import Pricing from './Website/Pricing';
import Blog from './Website/Blog';
import Sponsors from './Website/Sponsors';
import MapDirection from './Website/MapDirection';
import Footer from './Website/Footer';

import AllJs from './Website/CopySource/js/Alljs'


<script>
  
</script>
function App() {
  return (
    <div className="min-h-full h-screen  justify-center ">
    <div className="">
     {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter> */}
      <Header/>
      <Banner/>
      <Intro/>
      <FunFact/>
      <Speakers/>
      <Experience/>
      <Schedule/>
      <Pricing/>
      <Blog/>
      <Sponsors/>
      <MapDirection/>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
