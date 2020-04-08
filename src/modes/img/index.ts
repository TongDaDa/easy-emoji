
export default function useImgMode() {
    const emojiJson = require("../../assets/img/emoji.json");
    require("../../assets/img/emoji.css");
    const imgModeInterfaces = {
        emojiData: emojiJson,
        findImgByName,
        findPositionByName,
        useSprites: true
    };

    function findImgByName() {

    }

    function findPositionByName() {

    }

    return imgModeInterfaces;
}
