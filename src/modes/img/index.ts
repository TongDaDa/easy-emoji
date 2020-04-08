const emojiJson = require("./emoji.json");
require("./emoji.css");

const imgModeInterfaces = {
    emojiData: emojiJson,
    findImgByName,
    findPositionByName,
    useSprites: true,
};

function findImgByName() {

}

function findPositionByName() {

}

export default function useImgMode() {
    return imgModeInterfaces;
}
