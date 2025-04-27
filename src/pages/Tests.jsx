export default function Tests() {
  return (
    <div className="text-center py-16 animate-fadeIn">
      <h1 className="text-4xl font-bold text-cyan-700 mb-4">Тесты</h1>
      <p className="text-lg text-gray-600 mb-8">Проверьте свои знания с нашими тестами</p>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <TestCard title="Тест по математике" />
        <TestCard title="Тест по истории" />
        <TestCard title="Тест по биологии" />
      </div>
    </div>
  );
}

function TestCard({ title }) {
  return (
    <div className="bg-white shadow-md rounded-lg w-64 p-6 flex flex-col items-center hover:shadow-xl transition">
      <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center mb-4">
        🧠
      </div>
      <h3 className="text-lg font-bold text-cyan-700">{title}</h3>
    </div>
  );
}
