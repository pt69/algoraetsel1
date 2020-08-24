var zahlString = '13345793';
var zahl = 0;

function rechnen(zs) {
  var z = 0;
  for (var i = 0; i < zs.length; i++) {
    z += parseInt(zs[i]);
  } 
  return z;
}

function setup() {
  createCanvas(700,300);
  zahl = parseInt(zahlString);
  while (zahl > 9) {
    zahl = rechnen(zahlString);
    zahlString = zahl.toString();
  }
}

function draw() {
  background(240);  
  textSize(30);
  text(zahl,30,50);
}