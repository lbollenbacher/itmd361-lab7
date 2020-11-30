function init(){
//add your javascrip between these two lines of code
  document.getElemetById("entrybutton").addEventListener("click", f1); 
  function f1() {
    var narrowselectors = document.querySelectorAll("h2");
    var selectmyname = narrowselectors.item(0).innerHTML;
    var input = document.getElementById("entryinput").value;
    document.getElementById("textoutput").innerHTML = input;
    alert(selectmyname + ":" + " " + input);
  }
  window.addEventListener('load', init);
}
