
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { DashboardHeader } from './components/DashboardHeader';
import { handleSelectedLink } from "./utils/assets/handleSelectedLink";
import { Dashboard } from './components/Dashboard/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Projects } from './components/Projects';
import { Saved } from './components/Saved/Saved';

import { NavLink } from "react-router-dom";
import './App.scss';
import { ContactUs } from './components/ContactUs/CuntactUs';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <DashboardHeader />
        <Sidebar />
        <div className="App__main">
          <div className="App__content">
            <Routes>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='saved' element={<Saved />} />
              <Route path='help_center' element={<ContactUs />} />

            </Routes>
          </div>
        </div>

      </div>
    </HashRouter>
  );
}

export default App;



