import Accordion from "./components/Accordion/Accordion";


function App() {
  return (
    <main>
      <section>
        <h1>Why work with us</h1>
        <Accordion clasName="accordion">
          <Accordion.item  id="experience" title="20 years experience" className="accordion-item">
            <article>
              <p>you can't wrong us</p>
              <p>i give you good experience</p>
            </article>
          </Accordion.item>

          <Accordion.item id="guides" title="We are worikng with You" className="accordion-item">
            <article>
              <p>along fron our office</p>
              <p>We are worikng with loacal guides</p>
            </article>
          </Accordion.item>

        </Accordion>
      </section>
    </main>
  )
}

export default App;

