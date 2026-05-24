export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center px-10">

        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold mb-6">
            Películas y series ilimitadas
          </h1>

          <p className="text-xl text-zinc-300 mb-8">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>

          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded text-lg font-bold">
            Ver ahora
          </button>
        </div>

      </div>
    </section>
  );
}