import React, { useState } from 'react';

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    // 🔹 Тут буде інтеграція з GPT
    // Для прикладу — симуляція відповіді
    setTimeout(() => {
      setAnswer(`🤖 GPT: Это пример ответа на ваш вопрос: "${question}"`);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="max-w-2xl mx-auto animate-fadeIn">
      <h2 className="text-2xl font-bold text-cyan-700 mb-4">GPT Помощник</h2>
      <div className="space-y-4">
        <textarea
          rows="3"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Введите ваш вопрос..."
          className="w-full border p-3 rounded resize-none"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 disabled:opacity-50"
        >
          {loading ? 'Отправка...' : 'Отправить'}
        </button>
        {answer && (
          <div className="bg-gray-100 p-4 rounded shadow mt-4 whitespace-pre-wrap">
            {answer}
          </div>
        )}
      </div>
    </section>
  );
}
