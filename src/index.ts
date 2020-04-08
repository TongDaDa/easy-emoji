import useImgMode from "./modes/img/index";
import useFontMode from "./modes/font/index";

function easyEmoji(mode) {
    switch (mode) {
        case "img": return useImgMode();
        case "font": return useFontMode();
    }
}

export default easyEmoji;
