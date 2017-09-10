//Izaberi najveci clan iz datog niza putem petlje, NE built-in metodom.

function najVeciIzNiz() {
var niz=[120, 56, 440, 50, 244, 3412]
najveci=niz[0];
for (i=1; i < niz.length; i++) {
    if (najveci < niz[i]) { 
        najveci = niz[i];
    }
}
return najveci;
}

console.log("Broj "+najVeciIzNiz()+" je najveci u nizu. sacekajte 5 sec do sledeceg domaceg");
// Kraj KrAj kRAj kraJ