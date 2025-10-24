import { useState } from 'react';

const superheroTeam = [
  {
    id: 1,
    role: 'Лидер команды',
    power: 'Стратегическое видение',
    icon: '👨‍💼',
    description: 'Ведет команду к успеху через сложные проекты',
    badge: 'КАПИТАН'
  },
  {
    id: 2,
    role: 'Технический гуру',
    power: 'Инженерное мастерство',
    icon: '⚙️',
    description: 'Решает самые сложные технические задачи',
    badge: 'МАСТЕР'
  },
  {
    id: 3,
    role: 'Проектный герой',
    power: 'Безупречное выполнение',
    icon: '🎯',
    description: 'Доводит проекты до идеального результата',
    badge: 'СНАЙПЕР'
  },
  {
    id: 4,
    role: 'Креативный маг',
    power: 'Инновационные решения',
    icon: '💡',
    description: 'Находит нестандартные подходы к задачам',
    badge: 'ВИЗИОНЕР'
  },
  {
    id: 5,
    role: 'Защитник качества',
    power: 'Внимание к деталям',
    icon: '🛡️',
    description: 'Гарантирует высший стандарт работы',
    badge: 'СТРАЖ'
  },
  {
    id: 6,
    role: 'Коммуникатор',
    power: 'Сила переговоров',
    icon: '🤝',
    description: 'Строит крепкие партнерские отношения',
    badge: 'ДИПЛОМАТ'
  }
];

const Index = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-black rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-black rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-black rounded-full animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-white p-6 rounded-xl comic-shadow-sm mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/158e0faf-b5e9-4113-84d9-951428ab1ae5.jpg" 
              alt="Ямалсервестройурал" 
              className="h-16 md:h-20 object-contain"
            />
          </div>

          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-yellow-300 transform -rotate-2 rounded-3xl"></div>
            <div className="absolute -inset-4 bg-orange-500 transform rotate-1 rounded-3xl"></div>
            <h1 className="comic-text text-6xl md:text-8xl lg:text-9xl text-yellow-300 text-stroke relative z-10 animate-scale-in">
              FRIDAY POWER!
            </h1>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white transform rotate-1"></div>
            <p className="comic-text text-3xl md:text-5xl text-orange-500 relative z-10 px-8 py-4 border-4 border-black bg-white transform -rotate-1">
              🔥 ВМЕСТЕ МЫ НЕПОБЕДИМЫ! 🔥
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {superheroTeam.map((hero, index) => (
            <div
              key={hero.id}
              className="relative group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setFlippedCard(flippedCard === hero.id ? null : hero.id)}
            >
              <div className={`relative bg-white rounded-2xl p-6 comic-shadow transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                flippedCard === hero.id ? 'scale-105 -rotate-2' : ''
              }`}>
                <div className="absolute -top-4 -right-4 bg-yellow-300 text-black comic-text px-4 py-2 rounded-full border-4 border-black transform rotate-12 comic-shadow-sm z-10">
                  {hero.badge}
                </div>

                <div className="text-center mb-4">
                  <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                    {hero.icon}
                  </div>
                  <h3 className="comic-text text-2xl text-orange-500 mb-2">
                    {hero.role}
                  </h3>
                  <div className="bg-blue-500 text-white comic-text text-lg px-4 py-2 inline-block transform -rotate-1 border-2 border-black">
                    {hero.power}
                  </div>
                </div>

                <div className={`mt-4 transition-all duration-500 ${
                  flippedCard === hero.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <div className="bg-yellow-100 border-4 border-black p-4 rounded-lg comic-shadow-sm">
                    <p className="text-sm font-semibold text-gray-800">
                      {hero.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 justify-center">
                  <div className="w-3 h-3 bg-orange-500 rotate-45"></div>
                  <div className="w-3 h-3 bg-blue-500 rotate-45"></div>
                  <div className="w-3 h-3 bg-yellow-300 rotate-45"></div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-full h-full bg-black rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-orange-500 transform rotate-2 rounded-2xl"></div>
            <div className="relative bg-yellow-300 border-8 border-black rounded-2xl p-8 comic-shadow transform -rotate-1">
              <p className="comic-text text-4xl md:text-6xl text-black mb-4">
                ОТЛИЧНОЙ ПЯТНИЦЫ!
              </p>
              <div className="flex justify-center gap-4 text-4xl">
                <span className="animate-bounce">⚡</span>
                <span className="animate-bounce delay-75">💪</span>
                <span className="animate-bounce delay-150">🚀</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-xl font-bold comic-text bg-black bg-opacity-50 inline-block px-6 py-3 rounded-lg">
            ✨ Впереди выходные - заслуженный отдых супергероев! ✨
          </p>
        </div>
      </div>

      <div className="fixed top-1/4 left-0 comic-text text-9xl text-yellow-300 opacity-20 -rotate-12 pointer-events-none animate-pulse">
        POW!
      </div>
      <div className="fixed bottom-1/4 right-0 comic-text text-9xl text-orange-500 opacity-20 rotate-12 pointer-events-none animate-pulse">
        BOOM!
      </div>
    </div>
  );
};

export default Index;
