

var button = document.getElementById("myButton");
var counter = document.getElementById("counter");

var count = 0;

document.getElementById("myButton").onclick = function() {
    count++;
    counter.innerHTML = count;
    alert("Button was clicked!");
}

button.addEventListener("click", function() {
    count++;
    counter.innerHTML = count;
    alert("Button was clicked!");
});