import { HashRouter, Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  Sidebar,
  DashboardHeader,
  Projects,
  Uploads,
  ContactUs,
  ViewProject,
  AccountDetails,
  TestPage,
  Settings,
  Catalog,
  Favorites
} from './components'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'features/user/userSlice';
import s from './App.module.scss';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('user.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setUser(data))
      })
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
              <Route path='uploads' element={<Uploads />} />
              <Route path='catalog' element={<Catalog />} />
              <Route path='favorites' element={<Favorites />} />
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
