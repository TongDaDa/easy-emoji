import { ImageEmojiDataItem, useImgEmojiInterfaces } from "../../interfaces";
import { error } from "../../utils";

const defaultOptions: useImgEmojiInterfaces = {
    isLoadEmojiData:false,
    sprite: true,
    loadOne: false
};

interface empetyEmojiDataItem {
    id: number
}

export default function useImgMode() {
    let emojiJson: Array<ImageEmojiDataItem | empetyEmojiDataItem> = new Array(877).fill({ id: 0 }).map((i, index) => ({ id: index }));
    require(`../../assets/img/emoji.css`);
    const imgModeInterfaces = {
        emojiData: emojiJson,
        findImgByName,
        findPositionByName,
        getEmojiData,
        useSprites: true
    };

    /**
     * @description Choose certain emoji data
     * @params
     * startIndex,
     * endIndex
     * @return
     */
    function getEmojiData(startIndex: number | Array<number>, endIndex ?: number) : Array<ImageEmojiDataItem | empetyEmojiDataItem> {
        if (Array.isArray(startIndex)) {
            return emojiJson.filter((emojiItem: ImageEmojiDataItem | empetyEmojiDataItem) => startIndex.indexOf(emojiItem.id) >= 0)
        } else if (Number.isSafeInteger(startIndex) && endIndex !== undefined && Number.isSafeInteger(endIndex)) {
            return emojiJson.slice(startIndex, endIndex)
        } else if (startIndex && endIndex === undefined) {
            return emojiJson.slice(startIndex)
        }
        return []
    }

    /**
     * @param
     * imgName
     * @return base64
     */
    function findImgByName(imgName: string) {
        if (!imgName) {
            error("Cannot get the imgName in findImgByName, please ensure that you passed a correct param");
            return null
        }
        const img = require(`../../assets/img/imgs/${imgName}.png`);
        return img;
    }

    /**
     * @description
     * @param imgName
     */
    function findPositionByName(imgName: string) {
        //@ts-ignore
        const emojiItem = emojiJson.find((emojiItem: ImageEmojiDataItem) => emojiItem.name === imgName);
        if (!emojiItem) {
            error("Cannot find the image by imgName in findPositionByName, please ensure that you passed a correct param");
            return;
        }
        const emojiItemIndex = emojiItem.id;
        return [emojiItemIndex * 64, 0];
    }

    return imgModeInterfaces;
}
