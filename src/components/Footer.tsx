export default function Footer() {
  return (
    <div className="container relative z-10">
      <div className="text-sm py-5 text-slate-500 text-center">
        Card images provided by{" "}
        <a
          className="underline hover:no-underline"
          href="https://scryfall.com/"
          target="_blank"
        >
          Scryfall
        </a>
        . Set icons provided by{" "}
        <a
          className="underline hover:no-underline"
          href="https://keyrune.andrewgioia.com/"
          target="_blank"
        >
          Keyrune
        </a>
      </div>
    </div>
  );
}
