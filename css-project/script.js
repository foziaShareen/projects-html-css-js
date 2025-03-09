function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for (var i=0; i<headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.color = "red";
    elem.style.fontSize = "1.2em";
    }
    }
    function getNextElement(node) {
    if(node.nodeType == 1) {
    return node;
    }
    if (node.nextSibling) {
    return getNextElement(node.nextSibling);
    }
    return null;
    }
    window.onload = styleHeaderSiblings;

// var headers = document.getElementsByTagName("h1");
// console.log(headers);

// function getNextElement(node) {
//     if(node.nodeType == 1) {
//     return node;
//     }
//     if (node.nextSibling) {
//     return getNextElement(node.nextSibling);
//     }
//     return null;
//     }
//     for (var i = 0; i < headers.length; i++) {
//         var next = getNextElement(headers[i]);
//         var elem = getNextElement(headers[i].nextSibling);
//         elem.style.fontWeight = "bold";
// elem.style.fontSize = "1.2em";
        
//     }





