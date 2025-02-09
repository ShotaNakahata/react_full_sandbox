import Accordion from "./components/Accordion/Accordion";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import SerchableList from "./components/SerchableList/SerchableList";
import Place from "./Place";


const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us</h1>
        <Accordion clasName="accordion">
          <Accordion.item id="experience" className="accordion-item">
            <Accordion.title className="accordion-item-title">20 years experience</Accordion.title>
            <Accordion.content lassName="accordion-item-content">
              <article>
                <p>you can't wrong us</p>
                <p>i give you good experience</p>
              </article>
            </Accordion.content>
          </Accordion.item>

          <Accordion.item id="guides" className="accordion-item">
            <Accordion.title className="accordion-item-title">20 years experience</Accordion.title>
            <Accordion.content lassName="accordion-item-content">
              <article>
                <p>you can't wrong us</p>
                <p>i give you good experience</p>
              </article>
            </Accordion.content>
          </Accordion.item>

        </Accordion>
      </section>
      <section>
        <SerchableList items={PLACES}>
          {(item)=><Place item={item}/>}
        </SerchableList>
        <SerchableList items={["item 1", "item 2"]} >
          {(item)=>item}
        </SerchableList>
      </section>
    </main>
  )
}

export default App;

