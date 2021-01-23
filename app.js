const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

 function tosubmit() {
            // Getting the value of your text input
            var mytext = document.getElementById("mytext").value;

            // Storing the value above into localStorage
            localStorage.setItem("mytext", mytext);

            return true;
        }
		
function share() {
  var x = document.URL;
  document.getElementById("hahaha").innerHTML = x;
}		
function myFunction() {
	var mytext = localStorage.getItem("mytext");
	document.getElementById("hem").innerHTML = mytext;
    }   

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
