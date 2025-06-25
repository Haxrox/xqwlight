"use strict";

console.log("cchess");


function CHR(n) {
  return String.fromCharCode(n);
}

function ASC(c) {
  return c.charCodeAt(0);
}

function move2Iccs(mv) {
  var sqSrc = SRC(mv);
  var sqDst = DST(mv);
  return CHR(ASC("A") + FILE_X(sqSrc) - FILE_LEFT) +
      CHR(ASC("9") - RANK_Y(sqSrc) + RANK_TOP) + "-" +
      CHR(ASC("A") + FILE_X(sqDst) - FILE_LEFT) +
      CHR(ASC("9") - RANK_Y(sqDst) + RANK_TOP);
}
function move2IccsTW(pp, sqSrc, sqDst) {
    var ppType = CHR(pp.charCodeAt(0));
    var ppCode = CHR(pp.charCodeAt(1));
    var prePosA = CHR(ASC("A") + FILE_X(sqSrc) - FILE_LEFT);
    var prePosB = ASC("9") - RANK_Y(sqSrc) + RANK_TOP;
    var curPosA = CHR(ASC("A") + FILE_X(sqDst) - FILE_LEFT);
    var curPosB = ASC("9") - RANK_Y(sqDst) + RANK_TOP;

    var text = (ppType == 'r' ? '紅' : '黑');
    switch (ppCode) {
        case 'k':
            text += (ppType == 'r' ? '帥' : '將');
            break;
        case 'a':
            text += (ppType == 'r' ? '仕' : '士');
            break;
        case 'b':
            text += (ppType == 'r' ? '相' : '象');
            break;
        case 'n':
            text += (ppType == 'r' ? '碼' : '馬');
            break;
        case 'r':
            text += (ppType == 'r' ? '俥' : '車');
            break;
        case 'c':
            text += (ppType == 'r' ? '砲' : '包');
            break;
        case 'p':
            text += (ppType == 'r' ? '兵' : '卒');
            break;
    }

    var ccbool = (ppCode == "k") || (ppCode == "r") || (ppCode == "c") || (ppCode == "p"); 

    if (ppType == 'r') {
        text += eng2tw(prePosA, ppType);
        text += (((curPosB - prePosB) > 0) ? "進" : (((curPosB - prePosB) == 0) ? "平" : "退"));

        if (((curPosB - prePosB) > 0) && ccbool) {
            text += eng2twV(curPosB - prePosB);
        } else if (((curPosB - prePosB) < 0) && ccbool) {
            text += eng2twV(prePosB - curPosB);
        } else {
            text += eng2tw(curPosA, ppType);
        }

    } else {
        text += eng2tw(prePosA, ppType);
        text += (((curPosB - prePosB) > 0) ? "退" : (((curPosB - prePosB) == 0) ? "平" : "進"));

        if (((curPosB - prePosB) > 0) && ccbool) {
            text += (curPosB - prePosB);
        } else if (((curPosB - prePosB) < 0) && ccbool) {
            text += (prePosB - curPosB);
        } else {
           text += eng2tw(curPosA, ppType);
        }
    }

    return text;
}

function eng2tw(cc, tt) {
    if (tt == "r") {
        switch (cc) {
            case 'A':
                return "九";
                break;
            case 'B':
                return "八";
                break;
            case 'C':
                return "七";
                break;
            case 'D':
                return "六";
                break;
            case 'E':
                return "五";
                break;
            case 'F':
                return "四";
                break;
            case 'G':
                return "三";
                break;
            case 'H':
                return "二";
                break;
            case 'I':
                return "一";
                break;
        }
    } else {
        switch (cc) {
            case 'A':
                return "1";
                break;
            case 'B':
                return "2";
                break;
            case 'C':
                return "3";
                break;
            case 'D':
                return "4";
                break;
            case 'E':
                return "5";
                break;
            case 'F':
                return "6";
                break;
            case 'G':
                return "7";
                break;
            case 'H':
                return "8";
                break;
            case 'I':
                return "9";
                break;
        }

    }

}

function eng2twV(cc) {
    switch (cc) {
        case 9:
            return "九";
            break;
        case 8:
            return "八";
            break;
        case 7:
            return "七";
            break;
        case 6:
            return "六";
            break;
        case 5:
            return "五";
            break;
        case 4:
            return "四";
            break;
        case 3:
            return "三";
            break;
        case 2:
            return "二";
            break;
        case 1:
            return "一";
            break;
    }
}