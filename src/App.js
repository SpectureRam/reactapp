import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Genre from "./component/Genre";
import Article from "./component/Article";
import Toppicks from "./component/Toppicks";
import AHome from "./component/article/AHome";
import AHealth from "./component/article/AHealth";
import Book from "./component/historybook/Book";
import MBook from "./component/mysterybook/MBook";
import SFBook from "./component/scifibook/SFBook"
import NBook from "./component/novelbook/NBook";

function App() {
  return (
    <>

<BrowserRouter>
    <Navbar />
      <Routes>
         
          <Route index element={<Home />} />
          {/* <Route path="genre" element={<Genre />} /> */}
          <Route path="article" element={<AHome />} />
          <Route path="toppicks" element={<Toppicks />} />
          <Route path="login" element={<SFBook />} />
          <Route path="art1" element={<AHealth />} />
      
    {/* demo****************** */}

          <Route path="genre" element={<NBook />} />

         
          
        
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
