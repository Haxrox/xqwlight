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

    var text = (ppType == 'r' ? '?' : '?');
    switch (ppCode) {
        case 'k':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'a':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'b':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'n':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'r':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'c':
            text += (ppType == 'r' ? '?' : '?');
            break;
        case 'p':
            text += (ppType == 'r' ? '?' : '?');
            break;
    }

    var ccbool = (ppCode == "k") || (ppCode == "r") || (ppCode == "c") || (ppCode == "p"); 

    if (ppType == 'r') {
        text += eng2tw(prePosA, ppType);
        text += (((curPosB - prePosB) > 0) ? "?" : (((curPosB - prePosB) == 0) ? "?" : "?"));

        if (((curPosB - prePosB) > 0) && ccbool) {
            text += eng2twV(curPosB - prePosB);
        } else if (((curPosB - prePosB) < 0) && ccbool) {
            text += eng2twV(prePosB - curPosB);
        } else {
            text += eng2tw(curPosA, ppType);
        }

    } else {
        text += eng2tw(prePosA, ppType);
        text += (((curPosB - prePosB) > 0) ? "?" : (((curPosB - prePosB) == 0) ? "?" : "?"));

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
                return "?";
                break;
            case 'B':
                return "?";
                break;
            case 'C':
                return "?";
                break;
            case 'D':
                return "?";
                break;
            case 'E':
                return "?";
                break;
            case 'F':
                return "?";
                break;
            case 'G':
                return "?";
                break;
            case 'H':
                return "?";
                break;
            case 'I':
                return "?";
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
            return "?";
            break;
        case 8:
            return "?";
            break;
        case 7:
            return "?";
            break;
        case 6:
            return "?";
            break;
        case 5:
            return "?";
            break;
        case 4:
            return "?";
            break;
        case 3:
            return "?";
            break;
        case 2:
            return "?";
            break;
        case 1:
            return "?";
            break;
    }
}