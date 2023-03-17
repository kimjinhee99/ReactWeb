import Main from "./Main";
import styled from "styled-components";

import {BrowserRouter, Link, Route, Routes,useNavigate } from 'react-router-dom';
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Board from "./components/Board";
import Contact from "./components/Contact";
import Element from "./components/Element";
import Shop from "./components/Shop";
import { useEffect, useState } from "react";
import NavMenu from "./components/NavMenu";

function App() {

  return (
    <>
      <Main />
    </>
  );
}

export default App;