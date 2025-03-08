

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
  return false;
  }
  
    
    function prepareGallery() {
      if (!document.getElementsByTagName) return false;
      if (!document.getElementById) return false;
      if (!document.getElementById("imagegallery")) return false;
      var gallery = document.getElementById("imagegallery");
      var links = gallery.getElementsByTagName("a");
      for ( var i=0; i < links.length; i++) {
      links[i].onclick = function() {
      return showPic(this);
      }
      }
      }

// function showPic(whichpic) {
//   var source = whichpic.getAttribute("href");
//   var placeholder = document.getElementById("placeholder");
//   placeholder.setAttribute("src",source);
//   var text = whichpic.getAttribute("title");
//   var description = document.getElementById("description");
//   description.firstChild.nodeValue = text;
//   }
// var description = document.getElementById("description");

// console.log(description);


// function countBodyChildren() {
//      var items = document.getElementsByTagName('body')[0];
//     //  alert(items.childNodes.length);
//     // alert(items.nodeType)
// }
window.onload = function() {
  prepareGallery();
  // countBodyChildren(); // Uncomment this line if you want to call countBodyChildren as well
}