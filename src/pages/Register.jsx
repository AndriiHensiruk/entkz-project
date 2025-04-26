export default function Register() {
  return (
    <section className="max-w-md mx-auto mt-10 animate-fadeIn">
      <h2 className="text-2xl font-bold text-center text-cyan-700 mb-6">Регистрация</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Имя" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Пароль" className="w-full border p-2 rounded" />
        <button className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700">Зарегистрироваться</button>
      </form>
    </section>
  );
}
