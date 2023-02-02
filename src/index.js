import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css';
import Appmenu from "./Appmenu";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Navbar />
    <ItemListContainer/>
    <Appmenu/>
  </StrictMode>,
  rootElement
);

