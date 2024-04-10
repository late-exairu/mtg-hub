import data from "@/data/data.json";

export default function BannedCards() {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.bannedCards.map((card) => (
        <li key={card.name} className="flex mx-auto sm:mx-0 max-w-72 flex-col">
          <a href={card.scryfallUrl} target="_blank" className="mx-auto">
            <img
              src={card.scryfallImage}
              alt={card.name}
              className="aspect-[0.714] w-full inline-block"
            />
          </a>
          <div className="-mt-2 pt-4 border border-t-0 rounded-b-[5px] border-slate-300 p-3">
            <h4 className="text-lg font-medium">{card.name}</h4>
            <p className="text-sm">{card.reason}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
