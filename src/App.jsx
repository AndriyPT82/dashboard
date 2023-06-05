import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  Dashboard,
  Sidebar,
  DashboardHeader,
  Projects,
  Saved,
  ContactUs,
  ViewProject,
  AccountDetails,
  TestPage
} from './components'
import s from './App.module.scss';
import Settings from 'components/Settings/Settings';
import { useEffect, useState } from 'react';




function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('user.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(setUser)

  }, [])


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
              <Route path='settings' element={<Settings />} />
              <Route path='test_page' element={<TestPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;



