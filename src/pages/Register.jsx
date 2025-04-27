export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center text-cyan-700 mb-6">Регистрация</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Имя" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Пароль" className="w-full border p-2 rounded" />
          <button className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
