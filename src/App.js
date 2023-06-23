import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Coffee from "./components/Colections/Coffee";
import Tea from "./components/Colections/Tea";
import MenuList from "./components/MenuList/MenuList";
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=''/>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>

        <Route path="coffee" element={<Coffee/>}/>
        <Route path="tea" element={<Tea/>}/>
        <Route path="menu" element={<MenuList/>}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App


