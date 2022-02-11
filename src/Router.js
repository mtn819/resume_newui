import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Editor from './pages/Editor/Editor';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default Router;
