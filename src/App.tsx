// import StandardSlider from "@/components/StandardSlider";
import BannedCards from "@/components/BannedCards";
import StandardSets from "@/components/StandardSets";
import Section from "@/components/Section";

function App() {
  return (
    <>
      <div
        className={`fixed inset-0 bg-[url(./bg.jpg)] bg-cover bg-center opacity-5`}
      />
      <div className="container relative text-foreground">
        <h1 className="text-3xl font-black">MTGHub</h1>

        {/* <Section>
          <h3 className="text-2xl font-bold">Calendar</h3>
        </Section> */}

        {/* <Section>
        <h3 className="text-2xl font-bold">Standard</h3>
        <StandardSlider className="mt-4" />
      </Section> */}

        <Section>
          <h3 className="text-2xl font-bold">Standard</h3>
          <StandardSets className="mt-4" />
        </Section>

        <Section>
          <h3 className="text-2xl font-bold">Banned cards</h3>
          <p className="mb-6">
            Despite being part of legal sets, the following cards are explicitly
            not allowed in decks for standard.
          </p>
          <BannedCards />
        </Section>
      </div>
    </>
  );
}

export default App;
