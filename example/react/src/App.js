import React from 'react';
import './App.css';
import easyEmoji from "easy-emoji";

const { emojiData } = easyEmoji();

function App() {
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
