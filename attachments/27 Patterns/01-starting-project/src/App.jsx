import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us</h1>
        <Accordion clasName="accordion">
          <AccordionItem title="20 years experience" className="accordion-item">
            <article>
              <p>you can't wrong us</p>
              <p>i give you good experience</p>
            </article>
          </AccordionItem>

          <AccordionItem title="We are worikng with You" className="accordion-item">
            <article>
              <p>along fron our office</p>
              <p>We are worikng with loacal guides</p>
            </article>
          </AccordionItem>

        </Accordion>
      </section>
    </main>
  )
}

export default App;
