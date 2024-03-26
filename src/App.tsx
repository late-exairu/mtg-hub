import data from "@/data/data.json";

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl font-black">MTG Sets</h1>

      {data.standard.map((set, i) => (
        <div key={i} className="mt-4">
          <h2 className="text-lg font-bold mb-2">{set.legalTill}</h2>
          <ul className="">
            {set.sets.map((s, j) => (
              <li key={j}>
                <a href={`https://scryfall.com/sets/${s.code}`}>
                  <i
                    className={`ss ss-${s.code} ss-2x size-8 inline-flex items-center justify-center`}
                  ></i>{" "}
                  {s.name} ({s.code.toUpperCase()})
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
