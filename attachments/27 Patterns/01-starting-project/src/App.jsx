import Accordion from "./components/Accordion/Accordion";


function App() {
  return (
    <main>
      <section>
        <h1>Why work with us</h1>
        <Accordion clasName="accordion">
          <Accordion.item id="experience" className="accordion-item">
            <Accordion.title  className="accordion-item-title">20 years experience</Accordion.title>
            <Accordion.content  lassName="accordion-item-content">
              <article>
                <p>you can't wrong us</p>
                <p>i give you good experience</p>
              </article>
            </Accordion.content>
          </Accordion.item>

          <Accordion.item id="guides" className="accordion-item">
            <Accordion.title  className="accordion-item-title">20 years experience</Accordion.title>
            <Accordion.content lassName="accordion-item-content">
              <article>
                <p>you can't wrong us</p>
                <p>i give you good experience</p>
              </article>
            </Accordion.content>
          </Accordion.item>

        </Accordion>
      </section>
    </main>
  )
}

export default App;

