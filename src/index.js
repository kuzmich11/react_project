import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import {AuthProvider} from "./hook/useAuth";
// import ForTest from './ForTest';

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <Routers/>
        </AuthProvider>
    </BrowserRouter>,
    // <ForTest/>,
    document.getElementById('root')
);

reportWebVitals();
