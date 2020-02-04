
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function mynavFun() {
    var z = document.getElementById('myLogo')
    if(z.className === 'Logo'){
        z.className += 'responsive';

    }
    else{
        z.className = 'Logo'
    }
}
