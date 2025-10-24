import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const posters = [
  {
    id: 1,
    title: 'Отличной пятницы!',
    subtitle: 'Продуктивная неделя позади',
    image: 'https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/3a0fd56d-f964-4cdf-bb71-498a37648796.jpg',
    color: 'from-gray-100 to-gray-300',
    emoji: '✏️'
  },
  {
    id: 2,
    title: 'Хороших выходных!',
    subtitle: 'Вы заслужили отдых',
    image: 'https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/5f4fa6af-21e8-499a-a038-6413ebc976c3.jpg',
    color: 'from-slate-200 to-slate-400',
    emoji: '🎨'
  },
  {
    id: 3,
    title: 'Отдыхайте с радостью!',
    subtitle: 'После трудовой недели',
    image: 'https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/3838a480-a316-4544-916d-902562b81e23.jpg',
    color: 'from-zinc-200 to-zinc-400',
    emoji: '🌅'
  },
  {
    id: 4,
    title: 'Успешной пятницы!',
    subtitle: 'Спасибо за ваш труд',
    image: 'https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/12769c4b-b652-4a5e-b24a-3c3778e296e0.jpg',
    color: 'from-neutral-200 to-neutral-400',
    emoji: '🤝'
  }
];

const Index = () => {
  const [selectedPoster, setSelectedPoster] = useState<number>(1);

  const currentPoster = posters.find(p => p.id === selectedPoster) || posters[0];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentPoster.color} relative overflow-hidden transition-all duration-700`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-black rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-black rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-black rounded-full animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block bg-white p-4 md:p-6 rounded-xl comic-shadow-sm mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/689bd9ac-b494-4af1-ba69-b3b62f933e7c/files/158e0faf-b5e9-4113-84d9-951428ab1ae5.jpg" 
              alt="Ямалсервестройурал" 
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white bg-opacity-90 rounded-3xl p-6 md:p-8 comic-shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-black transform rotate-1 rounded-2xl"></div>
                  <h1 className="comic-text text-4xl md:text-6xl text-yellow-300 text-stroke relative z-10 bg-gradient-to-r from-orange-500 to-yellow-400 p-4 rounded-2xl text-center animate-scale-in">
                    {currentPoster.title}
                  </h1>
                </div>

                <div className="text-center mb-6">
                  <p className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                    <span className="text-4xl">{currentPoster.emoji}</span>
                    {currentPoster.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3 md:gap-4">
                  {posters.map((poster) => (
                    <button
                      key={poster.id}
                      onClick={() => setSelectedPoster(poster.id)}
                      className={`relative group overflow-hidden rounded-xl border-4 transition-all duration-300 hover:scale-105 ${
                        selectedPoster === poster.id 
                          ? 'border-black comic-shadow scale-105' 
                          : 'border-gray-400 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={poster.image} 
                        alt={poster.title}
                        className="w-full aspect-square object-cover"
                      />
                      {selectedPoster === poster.id && (
                        <div className="absolute inset-0 bg-yellow-300 bg-opacity-30 flex items-center justify-center">
                          <div className="text-4xl animate-bounce">{poster.emoji}</div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 font-semibold">
                    👆 Выбери постер, который зажигает!
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative comic-shadow-sm rounded-2xl overflow-hidden animate-scale-in">
                  <img 
                    src={currentPoster.image} 
                    alt={currentPoster.title}
                    className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 comic-shadow-sm">
                    <span className="text-4xl">{currentPoster.emoji}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black transform rotate-2 rounded-2xl"></div>
            <div className="relative bg-yellow-300 border-8 border-black rounded-2xl p-6 md:p-8 comic-shadow transform -rotate-1">
              <p className="comic-text text-3xl md:text-5xl text-black mb-4">
                От компании Ямалсервестройурал
              </p>
              <div className="flex justify-center gap-4 text-3xl md:text-4xl mb-4">
                <span className="animate-bounce">✏️</span>
                <span className="animate-bounce delay-75">🎨</span>
                <span className="animate-bounce delay-150">🌅</span>
              </div>
              <p className="text-base md:text-lg font-bold text-gray-800">
                Выбери постер в стиле карандашного рисунка!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-white bg-opacity-90 rounded-2xl p-4 md:p-6 comic-shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xl md:text-2xl">
              <span>✏️</span>
              <span className="font-bold text-gray-800">Хороших выходных после продуктивной недели!</span>
              <span>🎨</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/4 left-0 text-6xl md:text-9xl text-gray-800 opacity-5 -rotate-12 pointer-events-none">
        ✏️
      </div>
      <div className="fixed bottom-1/4 right-0 text-6xl md:text-9xl text-gray-800 opacity-5 rotate-12 pointer-events-none">
        🎨
      </div>
    </div>
  );
};

export default Index;