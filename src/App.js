import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import About from './Component/ABOUT_US/About';
import News from  './Component/NEWS/News';
import Reviews from './Component/REVIEWS/Reviews';
import Articles from './Component/ARTICLES/Articles';
import Future from './Component/FUTURE/Future';
import Login from './Component/Login';

function App(){
     return (
          <>
      <Routes>
        <Route path="/Home" element={<Header />}/> 
          <Route path="/About" element={<About />} />
          <Route path="/News" element={<News />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Future" element={<Future />} />
          <Route path="/" element={<Login />} />
      </Routes>
          </>
     )
}
export default App;