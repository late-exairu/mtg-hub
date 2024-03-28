import StandardSlider from "@/components/StandardSlider";
import BannedCards from "./components/BannedCards";

function App() {
  return (
    <div className="container">
      <h1 className="text-3xl font-black">MTGHub</h1>

      <StandardSlider className="mt-4" />

      <BannedCards />
    </div>
  );
}

export default App;
