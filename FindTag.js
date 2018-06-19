const FindTag = tag =>{
return new RegExp(`<(${tag})(| [^>]*)>(([^<]+|<?(?!\\/\\1>))+)<\\/\\1>`,"gi");
    //Group ___$1___^       ^         ^                       ^
    //Attributes _____$2____|         |                       |
    //Stuff between tags ______$3_____|                       |
    //Closing tag_____________________________________________|
};
