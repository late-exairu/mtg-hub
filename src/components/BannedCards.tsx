import data from "@/data/data.json";

export default function BannedCards() {
  return (
    <>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5">
        {data.bannedCards.map((card) => (
          <li key={card.name} className="">
            <a href={card.scryfallUrl} target="_blank">
              <img
                src={card.scryfallImage}
                alt={card.name}
                className="aspect-[0.714] w-full max-w-64 inline-block mb-2"
              />
            </a>
            <div className="">
              <h4 className="text-lg font-medium">{card.name}</h4>
              <p className="text-sm">{card.reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
