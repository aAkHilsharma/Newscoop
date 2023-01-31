import {useState} from "react";
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default function App(){
  const pageSize=6;
  const [progress, setProgress] = useState(0);

  return(
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>} /> 
          <Route exact path="/business" element={<News setProgress = {setProgress}   key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path="/health" element ={<News setProgress = {setProgress}   key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/sports"element={<News setProgress = {setProgress}   key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/entertainment"element={<News setProgress = {setProgress}   key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/science"element={<News setProgress = {setProgress}   key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path="/technology"element={<News setProgress = {setProgress}   key="science" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
