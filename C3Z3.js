//Naprviti PARNI i NEPARNI niz

function ParniNeparni() {
var niz=[16,23,3,78,9,14,17];
var parni=[];
var neparni=[];
var p=0;
var n=0;

for (i=0; i < niz.length; i++) {
    if (niz[i]%2 == 0) {
        parni.push(niz[i]);
        console.log(parni[p]+" ide u parni");
        p += 1;
    } else if (niz[i]%2 == 1) {
        neparni.push(niz[i]);
        console.log(neparni[n]+" ide u neparni");
        n += 1;
    }
}
}

ParniNeparni();

// KRaj KrAj KrAJ KraJ