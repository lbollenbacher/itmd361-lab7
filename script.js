function init(){
//add your javascrip between these two lines of code
  document.getElemetbyId("entrybutton").addEventListener("click", f1); 
  function f1() {
    var narrowselectors = document.querySelectorAll("h2");
    var selectmyname = narrowselectors.item(0).innerHTML;
  }
window.addEventListener('load', init);
}
