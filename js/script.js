"use strict"



function padString(str, strLength, symb = "*", right = true) {
    if (typeof(str) !== "string") return "Error";
    if (typeof(strLength) !== "number") return "Error";
    if (str.length === strLength) return str;
    if (typeof(symb) !== "string" || symb.length !== 1) return "Error";
    if (typeof(right) !== "boolean") return "Error";

    const symbolCount = strLength - str.length;
    let stringSymb = symb.repeat(symbolCount);
    return right ? str + stringSymb : stringSymb + str;
}

const result = padString("hello", 10, "^", false);
alert(result);