function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
var elem1 = document.getElementById("message");
elem1.style.position = "absolute";
elem1.style.left = "50px";
elem1.style.top = "100px";
moveElement("message",200,100,10);
if (!document.getElementById("message2")) return false;
var elem2 = document.getElementById("message2");
elem2.style.position = "absolute";
elem2.style.left = "50px";
elem2.style.top = "50px";
moveElement("message2",125,75,20);
    }
    addLoadEvent(positionMessage);

    // addLoadEvent(positionMessage);
