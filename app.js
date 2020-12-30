// https://en.wiktionary.org/wiki/%E5%B0%8F#/media/File:%E5%B0%8F-order.gif
// https://jisho.org/search/%E4%B8%B6%20%23kanji
//https://jisho.org/search/%E7%9B%AE%20%23kanji
// https://jisho.org/search/%E4%B8%B6%20#kanji
//https://en.wiktionary.org/wiki/%E8%82%89#/media/File:%E8%82%89-order.gif

getStrokeOrder = () => {
    const chars = document.querySelector("#char").value;
    const kanjiOnly = document.querySelector("#kanji-only").checked;
    let pageCount = 0;
    for (let i = 0; i < chars.length; i++) {
        if (pageCount > 5) {
            break;
        }
        const unicode = chars.charCodeAt(i);
        if (unicode < 12288 || (kanjiOnly && unicode < 19968)) {
            continue;
        }
        
        const encodedChar = encodeURI(chars[i])
        window.open(`https://en.wiktionary.org/wiki/${encodedChar}#/media/File:${encodedChar}-order.gif`, "_blank");
        window.open(`https://jisho.org/search/${encodedChar} %23kanji`, "_blank")
        pageCount++;
    }
    document.querySelector("#char").value = '';
}