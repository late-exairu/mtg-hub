import StandardSlider from "@/components/StandardSlider";
import BannedCards from "./components/BannedCards";

function App() {
  return (
    <div className="container">
      <h1 className="text-3xl font-black">MTGHub</h1>

      <h3 className="text-2xl font-bold">Calendar</h3>

      <h3 className="text-2xl font-bold">Standard</h3>
      <StandardSlider className="mt-4" />

      <h3 className="text-2xl font-bold">Banned cards</h3>
      <p className="mb-4">
        Despite being part of legal sets, the following cards are explicitly not
        allowed in decks for this format.
      </p>
      <BannedCards />
    </div>
  );
}

export default App;
