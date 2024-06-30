import CryptoTracker from "./components/CryptoTracker";
import ThreeCanvas from "./components/ThreeCanvas";

function App() {
  return (
    <main className="w-full bg-gradient-to-br from-[#f1f1f1] to-[#e3e3e3]font-MontserratRegular h-full min-h-screen">
      <section className="flex justify-between items-center max-w-[1400px] mx-auto">
        <h1 className="text-6xl font-MontserratSemiBold text-slate-500 uppercase select-none ">
          Cryptocurrency <span className="text-slate-700">Prices</span> <br />
          by Market Cap
        </h1>
        <ThreeCanvas />
      </section>

      <CryptoTracker />
    </main>
  );
}

export default App;
