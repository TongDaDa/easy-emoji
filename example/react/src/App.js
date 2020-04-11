import React, { useState } from 'react';
import './App.css';

import { emojiData, getIdByName, getHTMLTextNodes, findPositionByName, matchEmojiIndexFromCode} from "easy-emoji";

console.log(emojiData, getIdByName, findPositionByName, getHTMLTextNodes, "getIdByName");

console.log(getIdByName("cyclone"));

console.log(matchEmojiIndexFromCode("555[smile]fff[crescent_moon]"), "matchEmojiIndexFromCode");

console.log(findPositionByName("smile"), "findPositionByName");

const htmlNodes = getHTMLTextNodes("Wow, [smile][[crescent_moon]I like[smirk][smirk] easy emoji");
console.log(htmlNodes, "htmlNodes");

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
