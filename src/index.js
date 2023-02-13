import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* <ChakraProvider> */}
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {/* <BrowserRouter> */}
                    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
                        <ChakraProvider>
                            <App />
                        </ChakraProvider>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        {/* </ChakraProvider> */}
    </React.StrictMode>
);
