import React, { useState} from "react";

import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App =()=> {
 
  const [progress,setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API
 

 
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />

        
          <Routes>
            <Route
              path="/"
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" />}
            />
            <Route
              path="/business"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business" />}
            />
            <Route
              path="/entertainment"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" />}
            />
            <Route
              path="/general"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" />}
            />
            <Route
              path="/health"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" />}
            />
            <Route
              path="/science"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" />}
            />
            <Route
              path="/sports"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" />}
            />
            <Route
              path="/technology"
              
              element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
export default App
