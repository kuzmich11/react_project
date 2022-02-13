import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import {AuthProvider} from "./hook/useAuth";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <Routers/>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
