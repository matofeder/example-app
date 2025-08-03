export default function Home() {
  const heading = "Welcome to the Jungle";
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center font-sans bg-cover bg-center"
      style={{
        backgroundImage: `url('/jungle.png')`
      }}
    >
      <div className="bg-black/60 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-center drop-shadow-lg">
          {heading}
        </h1>
        <p className="text-2xl text-white-700 text-center">
          This is a very basic example page:)
        </p>
      </div>
    </main>
  );
}