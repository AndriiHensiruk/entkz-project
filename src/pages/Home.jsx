import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-10 px-4 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">
        Ent.kz
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">START LEARNING</p>

      {/* Кнопка Start Learning */}
      <div className="mt-6">
        <Link
          to="/courses"
          className="inline-block bg-cyan-600 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold shadow-md hover:bg-cyan-700 transition"
        >
          Начать обучение
        </Link>
      </div>

      {/* Карточки */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 md:mt-16">
        <Card title="SkyEng" />
        <Card title="Courses" />
        <Card title="UStudy" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-white shadow-md rounded-lg w-72 md:w-64 p-6 flex flex-col items-center hover:shadow-xl transition">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-200 rounded-full flex items-center justify-center mb-4 text-2xl">
        📚
      </div>
      <h3 className="text-md md:text-lg font-bold text-cyan-700">{title}</h3>
    </div>
  );
}
