import data from "@/data/data.json";

interface Card {
  name: string;
  scryfallUrl: string;
  scryfallImage: string;
  reason: string;
}

export default function BannedCards() {
  const bannedCards: Card[] = data.bannedCards;

  return (
    <>
      {bannedCards.length === 0 ? (
        <p className="mb-6">There are currently no cards banned in Standard.</p>
      ) : (
        <p className="mb-6">
          The following cards, although part of legal sets, are explicitly
          prohibited from inclusion in decks for Standard.
        </p>
      )}

      {bannedCards.length === 0 && (
        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bannedCards.map((card) => (
            <li
              key={card.name}
              className="flex mx-auto sm:mx-0 max-w-72 flex-col"
            >
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
      )}
    </>
  );
}
