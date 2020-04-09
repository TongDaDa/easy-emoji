
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
you could use one you preferred.

### Image Mode

#### Load all
```jsx harmony
import easyEmoji from "easy-emoji";
const imgMode = easyEmoji("img");
const { emojiData } = imgMode;
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

#### Load one or a specific list

😺So,if you do not need such much of emojis, you can provide a list indicating what emojis you want to use, in this case, 
easy-emoji does `not load the sprites`,  This is a example for the 
situation. 

```jsx harmony
import easyEmoji from "easy-emoji";
const { getEmojiData } = easyEmoji();
const emojiList = getEmojiData(3/*start index*/, 5/*end index*/); // or getEmojiData([3,4]);
// ... Ignoring the process that rendering the emojiList data, the behavior as same as above example.
```
