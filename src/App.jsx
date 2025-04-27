import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tests from "./pages/Tests";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-cyan-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-cyan-700">ENT.KZ</div>

        {/* Кнопка гамбургер для мобільних */}
        <button
          className="md:hidden text-3xl text-cyan-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Меню для великих екранів */}
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>
      </div>

      {/* Меню для мобільних */}
      {isOpen && (
        <nav className="flex flex-col items-center bg-white shadow-md md:hidden">
          <NavLinks mobile />
        </nav>
      )}
    </header>
  );
}

function NavLinks({ mobile }) {
  const linkClasses = mobile
    ? "block py-2 text-cyan-700 font-semibold"
    : "text-gray-600 hover:text-cyan-600";

  return (
    <>
      <Link to="/" className={linkClasses}>Главная</Link>
      <Link to="/courses" className={linkClasses}>Курсы</Link>
      <Link to="/tests" className={linkClasses}>Тесты</Link>
      <Link to="/login" className={linkClasses}>Вход</Link>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">&copy; 2025 ENT.KZ. Все права защищены.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-cyan-600 text-sm">О нас</a>
          <a href="#" className="text-gray-500 hover:text-cyan-600 text-sm">Контакты</a>
          <a href="#" className="text-gray-500 hover:text-cyan-600 text-sm">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
