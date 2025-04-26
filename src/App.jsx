import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Test from './pages/Test';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-700">ENT.KZ</h1>
        <nav className="space-x-4">
          <Link to="/">Главная</Link>
          <Link to="/courses">Курсы</Link>
          <Link to="/test">Тесты</Link>
          <Link to="/chat">Чат</Link>
          <Link to="/login">Вход</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test" element={<Test />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
