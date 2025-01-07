import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Example } from "./components/Example.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        
        <section id="core-concepts">
          <CoreConcepts></CoreConcepts>
        </section>

        <section id="examples">
        <Example></Example>
        </section>

      </main>
    </div>
  );
}

export default App;
