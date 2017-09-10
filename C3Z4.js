// Cene različitih proizvoda su zadate u vidu niza. 
// Za proizvode čija je cena manja od 50 dodati porez od 18% u suprotnom porez od 8%. 
// Izračunati krajnji trošak (sabrati cene i njihov porez). 
// cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]

var ukupno=0;
function nizPorezx() {}
var niz=[5, 145, 69, 56, 13, 456, 78, 4, 30];
var ukupno=0;

for (var i=0; i < niz.length; i++) {
	if (niz[i]<=50) {
		ukupno += niz[i]+((niz[i]/100)*18));
	} else { 
		ukupno += niz[i]+((niz[i]/100)*8));
	}
}

console.log("Ukupna cena sa porezima je "+ukupno);
