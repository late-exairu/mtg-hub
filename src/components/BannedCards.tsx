import data from "@/data/data.json";

export default function BannedCards() {
  return (
    <>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.bannedCards.map((card) => (
          <li key={card.name}>
            <a href={card.scryfallUrl}>
              <img
                src={card.scryfallImage}
                alt={card.name}
                className="aspect-[0.714] w-52 max-w-full inline-block mb-2"
              />
            </a>
            <h4 className="text-lg font-medium">{card.name}</h4>
            <p className="text-sm">{card.reason}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
