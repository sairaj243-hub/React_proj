import { lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import MyNavigate from "./Component/MyNavigate";
import MyContext from "./Component/MyContext";
import CallBackEx from './Component/CallBackEx';
import DataMap from './Component/DataMap';
import FormHandling from './Component/FormHandling';
import LCMethod from './Component/LCMethod';
import UnControlled from './Component/UnControlled';
import Zustand from './Component/Zustand';
import UseZustand from './Component/UseZustand';
const ApiConnectivity=lazy(()=> import("./Component/ApiConnectivity"));
function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>loadinh...</div>}>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mynavigate" element={<MyNavigate />} />
        <Route path="/mycontext" element={<MyContext />} />
        <Route path="/" element={<Home />} />
        <Route path="callbackex" element={<CallBackEx />} />
        <Route path="datamap" element={<DataMap />} />
        <Route path='formhandling' element={<FormHandling />} />
        <Route path='apiconnectivity' element={<ApiConnectivity/>}/>
        <Route path='lcm' element={<LCMethod/>}/>
        <Route path='uc' element={<UnControlled/>}/>
        <Route path='zustand' element={<Zustand/>}/>
        <Route path='usezustand' element={<UseZustand/>}/>
      </Routes>
      <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;