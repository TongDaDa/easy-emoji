
## Overview 📖

Exactly as this project's name, easy-emoji provide some `solutions` which displaying a emoji on old system or 
browser, and it is easy to integrate it to your project.  ❤️

😄 If you have curiosities for the compatible problems that some older system or browser cannot display certain emoji, you could read 
the [blog](https://tongdada.github.io/2020/04/01/all-about-emoji/) named `All about emoji` by me.

## Usage 🔧

Firstly, ensure that you already installed it on your project, otherwise use the command in your project. 💪

`npm i easy-emoji -S`

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

😄，For above example, apparently we only need the **emojiData to map its styles to the element**, yeah, it's enough for some 
simple situations, actually it load a **sprites** which including `877 emojis` and the size is about **800+kb and 2.4MB
corresponding to `1x.png` and `2x.png`**.

#### Load one or a specific list

😺So,if you do not need such much of emojis, you can provide a list indicating what emojis you want to use, in this case, 
easy does `not load the sprites`, it will load one by one for the list you provided. This is a example for the 
situation.

```jsx harmony
import easyEmoji from "easy-emoji";
const imgMode = easyEmoji("img");
const { getEmojiData } = imgMode;
const emojiList = getEmojiData(3, 5); // or getEmojiData([3,4,5]);
// ... Ignoring render process that rendering the emojiList data, the behavior as same as above example.
```

🚀 Wow, it appears very amazing, and we could also deeply into `easy-emoji`.

### Svg Mode

### Font mode

## Options
