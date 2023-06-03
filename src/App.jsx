import { HashRouter, Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  Sidebar,
  DashboardHeader,
  Projects,
  Saved,
  ContactUs,
  ViewProject,
  AccountDetails
} from './components'
import s from './App.module.scss';




function App() {
  return (
    <HashRouter>
      <div className={s.App}>
        <DashboardHeader />
        <Sidebar />
        <div className={s.main}>
          <div className={s.content}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='saved' element={<Saved />} />
              <Route path='help_center' element={<ContactUs />} />
              <Route path='view_project' element={<ViewProject />} />
              <Route path='account_details' element={<AccountDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;



