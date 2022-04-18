import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnglishRoute } from './route/EnglishOption'
import { EspanolRoute } from './route/EspanolRoute'



function AppRouteOption() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={ <EnglishRoute/>} />
          <Route exact path="" element={<EspanolRoute/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouteOption;
