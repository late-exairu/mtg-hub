const sets = [
  {
    name: "Innistrad: Midnight Hunt",
    code: "mid",
  },
  {
    name: "Innistrad: Crimson Vow",
    code: "vow",
  },
  {
    name: "Kamigawa: Neon Dynasty",
    code: "nkd",
  },
  {
    name: "Streets of New Capenna",
    code: "snc",
  },
  {
    name: "Dominaria United",
    code: "dmu",
  },
  {
    name: "The Brothers' War",
    code: "bro",
  },
  {
    name: "Phyrexia: All Will Be One",
    code: "one",
  },
  {
    name: "March of the Machine",
    code: "mom",
  },
  {
    name: "March of the Machine: The Aftermath",
    code: "mat",
  },
  {
    name: "Wilds of Eldraine",
    code: "woe",
  },
  {
    name: "The Lost Caverns of Ixalan",
    code: "lci",
  },
  {
    name: "Murders at Karlov Manor",
    code: "mkm",
  },
  {
    name: "Outlaws of Thunder Junction",
    code: "otj",
  },
];

function App() {
  return (
    <div className="container">
      <h1>MTG Sets</h1>
      <ul>
        {sets.map((set) => (
          <li key={set.code}>
            <i
              className={`ss ss-${set.code} ss-2x size-8 inline-flex items-center justify-center`}
            ></i>{" "}
            {set.name} ({set.code.toUpperCase()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
