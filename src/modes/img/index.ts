import { ImageEmojiDataItem, useImgEmojiInterfaces } from "../../interfaces";
import { error } from "../../utils";
const emojiJson: Array<ImageEmojiDataItem> = require(`../../assets/img/emoji.json`);
require(`../../assets/img/emoji.css`);

const defaultOptions: useImgEmojiInterfaces = {
    isLoadEmojiData:false,
    sprite: true,
    loadOne: false
};

interface empetyEmojiDataItem {
    id: number
}

const matchingSymbleEXP = /(?<=\[)(\w+)(?=\])/g;

function useImgMode() {

    const imgModeInterfaces = {
        emojiData: emojiJson,
        matchingSymbleEXP,
        findPositionByName,
        getEmojiData,
        getIdByName,
        getHTMLTextNodes,
        getCodeByName,
        matchEmojiIndexFromCode
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
     * @description
     * @param name
     */
    function getCodeByName(name: string) {
        return `[${name}]`
    }

    /**
     * @description
     * @param messageText
     */
    function getHTMLTextNodes(messageText: string) {
        const htmlTextNodes = [];
        let preMatchedIndex = 0;
        // @ts-ignore
        messageText.replace(matchingSymbleEXP, function (matStr, p1, offset) {
            const emojiId = getIdByName(matStr);
            const originalWrapperMatStr = `[${matStr}]`;
            const slicedStr = messageText.slice(preMatchedIndex, offset - 1);
            if (!slicedStr) {
                htmlTextNodes.push(emojiId || originalWrapperMatStr)
            } else {
                htmlTextNodes.push(slicedStr, emojiId || originalWrapperMatStr);
            }
            preMatchedIndex = offset + matStr.length + 1;
        });
        if (preMatchedIndex !== messageText.length) {
            htmlTextNodes.push(messageText.slice(preMatchedIndex))
        }
        return htmlTextNodes.map((value) => {
            const isString = typeof value === 'string';
            return {
                text: isString ? value : null,
                cssId: !isString ? `e_${value}` : null
            }
        });
    }

    function matchEmojiIndexFromCode(strIncludingEmojiCode: string) {
        return strIncludingEmojiCode.match(matchingSymbleEXP);
    }

    /**
     * @description
     * @param name
     */
    function getIdByName(name: string){
        const foundEmoji = emojiJson.find((emojiData: ImageEmojiDataItem) => {
            return emojiData.name === name;
        });
        if (foundEmoji) {
            return foundEmoji.id;
        }
        return null;
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

export default useImgMode();
