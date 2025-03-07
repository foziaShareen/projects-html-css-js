
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
  }
// var description = document.getElementById("description");

// console.log(description);


// function countBodyChildren() {
//      var items = document.getElementsByTagName('body')[0];
//     //  alert(items.childNodes.length);
//     // alert(items.nodeType)
// }
// window.onload = countBodyChildren