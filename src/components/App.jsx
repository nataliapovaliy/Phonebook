import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const Phonebook = lazy(() => import("pages/Phonebook/Phonebook"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));

const App = () => {

  return (
    <div>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/phonebook' element={<Phonebook /> } />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/usermenu' element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  )
  
}

export default App
