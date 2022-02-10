import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<><Nav /><Home /></>} />
        </Routes>
    </BrowserRouter>
}

export default Router;
