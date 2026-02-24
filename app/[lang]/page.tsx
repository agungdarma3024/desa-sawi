// Fungsi untuk memanggil kamus (perhatikan perubahan pada ../../)
const getDictionary = async (lang: string) => {
  if (lang === 'en') return import('../../dictionaries/en.json').then((module) => module.default);
  return import('../../dictionaries/id.json').then((module) => module.default);
};

export default async function Home({ params }: { params: { lang: string } }) {
  // Ambil data kamus berdasarkan bahasa di URL (params.lang)
  const dict = await getDictionary(params.lang);

  return (
    <main className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?q=80&w=2070" 
          alt={dict.hero.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> 
      </div>

      {/* Konten Teks & Tombol */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {dict.hero.title}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          {dict.hero.description}
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
          {dict.hero.cta}
        </button>
      </div>
    </main>
  );
}