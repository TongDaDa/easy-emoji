import React, { useState } from 'react';
import './App.css';

import { emojiData, getIdByName, getHTMLTextNodes } from "easy-emoji";

console.log(emojiData, getIdByName, getHTMLTextNodes, "getIdByName");

console.log(getIdByName("cyclone"));

const htmlNodes = getHTMLTextNodes("asdads[][][][smie][]2342342[crescent_moon]asdasdasd[smirk]ppp[smirk][]");

function App() {
  const [pickUpVisible, setPickUpVisible] = useState();
  return (
    <div className="App">
      <section>
          <ul className={"easy-emoji-list"}>
              {
	              emojiData.map(({ id }, index) => {
                      return  <li key={id} className={"emoji"} id={`e_${id}`}> </li>
                  })
	          }
          </ul>
      </section>
    </div>
  );
}

export default App;
