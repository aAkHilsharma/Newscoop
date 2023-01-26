import './App.css';
import {Component} from "react";
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component{
  render(){
    return(
      <>
      <Navbar />
      <News pageSize={40}/> 
      </>
    )
  }
}
