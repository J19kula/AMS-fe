import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Login from './login';

export default function Navigation() {

    const [currentUser, setCurrentUser] = useState();
    const globalProps = {currentUser, setCurrentUser};

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login {...globalProps} />} />
            </Routes>
        </BrowserRouter>
    )
}