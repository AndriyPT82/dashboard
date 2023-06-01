import { HashRouter, BrowserRouter, Routes, Rout, Route } from 'react-router-dom'
import { DashboardHeader } from './components/DashboardHeader';
import { handleSelectedLink } from "./utils/assets/handleSelectedLink";
import { Dashboard } from './components/Dashboard/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Projects } from './components/Projects';
import { Saved } from './components/Saved/Saved';

import { NavLink } from "react-router-dom";
import './App.scss';


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
              <Route path='saved' element={<Saved />}>
                
              </Route>

            </Routes>
          </div>
        </div>

      </div>
    </HashRouter>
  );
}

export default App;



