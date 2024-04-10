// import StandardSlider from "@/components/StandardSlider";
import BannedCards from "@/components/BannedCards";
import StandardSets from "@/components/StandardSets";
import StandardSetsMobile from "@/components/StandardSetsMobile";
import Section from "@/components/Section";
import FutureEvents from "./components/FutureEvents";

function App() {
  return (
    <>
      <div
        className={`fixed inset-0 bg-[url(./bg.jpg)] bg-cover bg-center opacity-5`}
      />
      <div className="container relative text-foreground">
        <h1 className="text-3xl font-black">MTGHub</h1>

        {/* <Section>
          <h2 className="text-2xl font-bold">Calendar</h2>
        </Section> */}

        {/* <Section>
        <h2 className="text-2xl font-bold">Standard</h2>
        <StandardSlider className="mt-4" />
      </Section> */}

        <Section>
          <h2 className="text-2xl font-bold">Standard</h2>
          <StandardSetsMobile className="mt-4 block md:hidden" />
          <StandardSets className="mt-4 hidden md:block" />
        </Section>

        <Section>
          <FutureEvents />
        </Section>

        <Section>
          <h2 className="text-2xl font-bold">Banned cards</h2>
          <p className="mb-6">
            The following cards, although part of legal sets, are explicitly
            prohibited from inclusion in decks for Standard.
          </p>
          <BannedCards />
        </Section>
      </div>
    </>
  );
}

export default App;
