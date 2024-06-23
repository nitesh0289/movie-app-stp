import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../pages/home";
import Main from "../layouts/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<h1>Video Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
