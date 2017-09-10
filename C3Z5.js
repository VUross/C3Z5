// Proveriti da li je rec palindrom

var testString=prompt("Molim unesite test string :");
var compStr="";
var duzina=0;

compstr=testString.toUpperCase();

function palindrom() {
  for (var i=0, duzina=compstr.length-1; i < duzina/2; i++) {
    if(compstr[i] !== compstr[duzina-i]) {
      console.log("Nije palindrom");
    } else {
      console.log("Jeste palindrom");
    }
  }
} 


palindrom();

//Kraj KraJ kRAj KraJ