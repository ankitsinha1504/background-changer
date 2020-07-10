document.querySelector("button").addEventListener("click", function() {
  randomisation();
});

function randomisation() {
  var a = [];
  for (var i = 0; i < 6; i++) {
    a[i] = Math.floor(Math.random() * 16);
  }
  for (var j = 0; j < 6; j++) {
    switch (a[j]) {
      case 10:
        a[j] = "a";
        break;
      case 11:
        a[j] = "b";
        break;
      case 12:
        a[j] = "c";
        break;
      case 13:
        a[j] = "d";
        break;
      case 14:
        a[j] = "e";
        break;
      case 15:
        a[j] = "f";
        break;
      default:
        //Do nothing
        break;
    }
  }
  changeColor(a);
}



function changeColor(a) {
  var b = "#"+a[0]+a[1]+a[2]+a[3]+a[4]+a[5];
  document.querySelector("body").style.backgroundColor = b
  document.querySelector("span").innerHTML = b
}
