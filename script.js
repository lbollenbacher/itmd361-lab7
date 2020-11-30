function init(){
//add your javascrip between these two lines of code
  document.getElemetbyId("entrybutton").addEventListener("click", f1); 
  function f1() {
    var narrowselectors = document.querySelectorAll("h2");
    var selectmyname = narrowselectors.item(0).innerHTML;
    var input = document.getElementById("entryinput").value;
    document.getElementById("textoutput").value = input;
    alert(selectmyname + ":" + input);
  }
window.addEventListener('load', init);
}
