var colors = ["black", "white", "red", "yellow", "green", "orange"]
var currentColor = 0
var lis = document.querySelectorAll("#pin h2")
function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}
window.setInterval(changeColor, 1000)