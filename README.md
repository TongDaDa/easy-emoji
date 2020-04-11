
## Overview 📖

Exactly as this project's name, easy-emoji provide some `solutions` which displaying a emoji on old system or 
browser, and it is easy to integrate it to your project.  ❤️

😄 If you have curiosities for the compatible problems that some older system or browser cannot display certain emoji, you could read 
the [blog](https://tongdada.github.io/2020/04/01/all-about-emoji/) named `All about emoji` by me.

## Usage 🔧

Firstly, ensure that you already installed it on your project, otherwise use the command in your project. 💪

```bash
npm i easy-emoji -S
```

I classify these solutions into three modes which named `Image mode`, `SVG mode`, and `Font mode`, 
Easy emoji just use the `Image mode` to help you to do this, And It will support `all solutions` in the near future. 🏆

## Modules

|             Name              |            Type             |                            Default                            | Description                                                                         |
| :---------------------------: | :-------------------------: | :-----------------------------------------------------------: | :---------------------------------------------------------------------------------- |
|  **[`emojiData`](#emojiData)**     | `{Array}` |                                         `[{ id, name, alias },...]`        | `877` objects which including the id, name and alias for a emoji in an array.       |
|  **[`getEmojiData`](#getEmojiData)**  |     `{Function}`     |                           `getEmojiData([1,2,3])`            | Get certain emojis by slice or an array you provided                                |
|  **[`findPositionByName`](#findPositionByName)**     | `{Function}` |                    `findPositionByName("smile")`      | Find the position of the Sprite by a emoji's name                                   |
|  **[`getIdByName`](#getIdByName)**  |       `{Function}`     |                           `getIdByName("smile")`             | Get the emoji's id by its name                                                      |
|  **[`getHTMLTextNodes`](#getHTMLTextNodes)** |        `{Function}`         |             `getHTMLTextNodes("Hi[smile]")`    | Get the interpreted nodes that help you to recognize which is `emojiCode` or normal text node  |
|  **[`getCodeByName`](#getCodeByName)**  |         `{Function}`          |                `getCodeByName("smile")`           | Get the `emojiCode` which help you to `display in a input element`                  |
|  **[`matchEmojiIndexFromCode`](#matchEmojiIndexFromCode)**  | `{Function}` |             `matchEmojiIndexFromCode("Where is the [laughing] emoji?")`          | Querying whether there is an `emojiCode` in a string that conforms to the rule  |                                                      |

### emojiData

```jsx harmony
import easyEmoji from "easy-emoji";
const { emojiData } = easyEmoji;
function renderEmojiList() {
	return <ul className={"easy-emoji-list"}>
                {
               	    emojiData.map(({ name, alies, id }) => {
               	    	return  <li
                           key={id}
                           className={"emoji"}
                           data-emoji-name={name}
                           id={`e_${id}`}
                        > </li>
               	    })
               	}
    </ul>
}
```

😄For above example, apparently we only need the **emojiData to map its styles to the element**, yeah, it's enough for some 
simple situations, actually it load a **sprites** which including `877 emojis` and the size is about **2.4MB**.

### `getEmojiData`
😺So,if you do not need such much of emojis, you can provide a list indicating what emojis you want to use, 
This is a example for the situation. 

```jsx harmony
import { getEmojiData }  from "easy-emoji";
const emojiList = getEmojiData(3/*start index*/, 5/*end index*/); // or getEmojiData([3,4]);
// ... Ignoring the process that rendering the emojiList data, the behavior as same as above example.
```

### `findPositionByName`

Get the position of the `Sprite` by name.

```javascript
import {findPositionByName} from "easy-emoji";
findPositionByName("smile");
// [-69, 0]
// [x, y]
```

So, we can set the `background-position` to your element, we don't really need this method, 
we could just use the class `emoji` and Id `e_{emojiId}` to an element if these styles has no side-effects
for your page.

### `getHTMLTextNodes`

```javascript
const htmlNodes = getHTMLTextNodes("Wow, [smie][[crescent_moon]I like[smirk][smirk] easy emoji");
// [
//     {text: "Wow, ", cssId: null},
//     {text: null, cssId: "e_2"},
//     {text: "[", cssId: null},
//     {text: null, cssId: "e_301"},
//     {text: "I like", cssId: null},
//     {text: null, cssId: "e_8"},
//     {text: null, cssId: "e_8"},
//     {text: " easy emoji", cssId: null}
// ]
```

So, below is a example that how to process these `Nodes` when we received a message.

``` jsx harmony
import { getHTMLTextNodes } from "easy-emoji";

const TextMessage = props => {
  const messageText = props.data.text;
  const htmlNodes = getHTMLTextNodes(messageText);
  return (
    <div className="sc-message--text">
      {htmlNodes.map(({ text, cssId }) => {
        return text ? <span> { text } </span> : (
          <div className={"emoji"} id={cssId} />
        );
      })}
    </div>
  );
};
```

### `getCodeByName`

```jsx harmony
import { getCodeByName } from "easy-emoji";
function renderInput() {
	const [inputValue, setInputValue] = useState("");
	const handleChange = () => {
		setInputValue(inputValue)
	}
	const onPickupEmoji = emoji => {
		// the emoji is one of the getEmojiData.
		setInputValue(inputValue + getCodeByName(emoji.name))
	}
	return <div>
	    <input type="text" onChange={handleChange} />
	    <PickupEmojiModal onPickUp={} />
    </div>
}
```

### `matchEmojiIndexFromCode`

return a list which including all the` emojiCode`, 

```javascript
import { matchEmojiIndexFromCode } from "easy-emoji";
console.log(matchEmojiIndexFromCode("555[smile]fff[crescent_moon]"));
// ["smile", "crescent_moon"]
```

### `getIdByName`

Get the emoji's id which represent the id of an object of the `emojiData`, and you could also 
to get it manually by the `emojiData`.
