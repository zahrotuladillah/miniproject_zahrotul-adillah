import NoMatch from "./NoMatch";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";
import TambahPemasukan from "./component/TambahPemasukan";
import TambahPengeluaran from "./component/TambahPengeluaran";
import TambahRencana from "./component/TambahRencana";
import Grafik from "./component/Grafik";
import './style.css'

// Routing ke setiap page
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/Home" element={<Home />}/> 
        <Route path="/TambahPemasukan" element={<TambahPemasukan />}/>
        <Route path="/TambahPengeluaran" element={<TambahPengeluaran />}/>
        <Route path="/TambahRencana" element={<TambahRencana />}/>
        <Route path="/Grafik" element={<Grafik />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}