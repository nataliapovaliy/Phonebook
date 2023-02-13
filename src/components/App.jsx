import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/auth-services';

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const Phonebook = lazy(() => import("pages/Phonebook/Phonebook"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));


const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? ( <p>Refreshing user...</p>) :(
    <div>
      <ChakraProvider >
      <Routes>
        
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            
            <Route path='/phonebook' element={
              <PrivateRoute redirectTo='/login' component={<Phonebook />} /> } />

            <Route path='/register' element={
              <RestrictedRoute redirectTo='/phonebook' component={<RegisterPage />} />} />
            
            <Route path='/login' element={
              <RestrictedRoute redirectTo='/phonebook' component={<LoginPage />} />} />
            
            <Route path='/usermenu' element={
              <PrivateRoute redirectTo='/login' component={<UserPage />} />} />
            
            {isLoggedIn ? (<Route path='*' element={<Phonebook />} />) : (
              <Route path='*' element={<LoginPage />} />
            )
            }
            
          </Route>
        
    </Routes>
    </ChakraProvider>
    </div>
  )
}

export default App