import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <ChakraProvider>
 {/* <BrowserRouter basename='/goit-react-hw-08-phonebook'> */}
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </ChakraProvider>
    </React.StrictMode>
);