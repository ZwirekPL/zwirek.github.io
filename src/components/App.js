import { Routes , Route,} from "react-router-dom";

import Main from "./Main";
import LoginSection from "./LoginSection";
import AboutSection from "./AboutSection";
import AirConditioning from "./airConditioning.js";
import Ventilation from "./ventilation.js";
import HeatPump from "./heatPump.js";
import Recuperation from "./recuperation.js";
import FireProtection from "./fireProtection.js";
import Shop from "./shop.js";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import SignSection from "./SignSection";



import "../style/css/App.css";
import "../fontello/css/fontello.css";




function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/login" element={<LoginSection/>}/>
        <Route path="/signup" element={<SignSection/>}/> 
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/air-conditioning"  element={<AirConditioning/>}/>
        <Route path="/ventilation"  element={<Ventilation/>}/>
        <Route path="/heat-pump"  element={<HeatPump/>}/>
        <Route path="/recuperation"  element={<Recuperation/>}/>
        <Route path="/fire-protection" element={<FireProtection/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<BlogSection/>}/>
        <Route path="/contact"  element={<ContactSection/>}/>

      
    </Routes>
  );
}

export default App;
