/* by: ZIMONH src: https://github.com/zimonh/RegExp-Find-Tag
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */
const FindTag = tag =>{
return new RegExp(`<(${tag})(| [^>]*)>(([^<]+|<?(?!\\/\\1>))+)<\\/\\1>`,'gi');
    //Group ___$1___^       ^         ^                       ^
    //Attributes _____$2____|         |                       |
    //Stuff between tags ______$3_____|                       |
    //Closing tag_____________________________________________|
};