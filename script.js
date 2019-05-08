let dieren = ["Aap", "Vogel"];
let dierentuindieren = [];
let randomgetal1 = getRandomInt();
let randomgetal2 = getRandomInt();
let apendiv = document.getElementById("apen");
let apencount = 0;
let vogelsdiv = document.getElementById("vogels");
let vogelcount = 0;


class Dier {
    constructor(kleur) {
        this.kleur = kleur;
    }
    eat() {
        console.log("Ik ben aan het eten!");
    }
}

class Mens {
    constructor(naam) {
        this.naam = naam;
    }
    loop() {
        console.log("Ik zit op een bankje!");
    }
}

class Aap extends Dier {
    constructor(kleur, heeftstaart) {
        super(kleur);
        this.heeftstaart = heeftstaart;
    }
    klim() {
        console.log("Ik hang aan een tak!");
    }
}

class Vogel extends Dier {
    constructor(kleur, vliegsnelheid) {
        super(kleur);
        this.vliegsnelheid = vliegsnelheid;
    }
    vlieg() {
        console.log("Ik zit op een tak!");
    }
}

class Verzorger extends Mens {
    constructor(naam, diersoort) {
        super(naam);
        this.diersoort = diersoort;
    }
    voer() {
        console.log("Ik ben de leeuwen aan het voeren!");
    }
}

class Bezoeker extends Mens {
    constructor(naam, ticketid) {
        super(naam);
        this.ticketid = ticketid;
    }
    kijk() {
        console.log("Ik kijk op dit moment naar de Olifanten!");
    }
}


function getRandomInt() {
    min = 0;
    max = dieren.length -1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function fillZoo(aantaldieren) {   
    for (i=0; i < aantaldieren; i++) {
    
     if (getRandomInt() == 0) {
         dierentuindieren.push(new Vogel("geel", 100));
     }
     else {
        dierentuindieren.push(new Aap("bruin", "ja"));
     }
    }
}

fillZoo(10);

function countAnimals() {    
    for (i=0; i < dierentuindieren.length; i++) {
        if (dierentuindieren[i].kleur == "bruin" ) {
            apencount += 1;
            apendiv.innerHTML = apencount;
        }
        else {
            vogelcount += 1;
            vogelsdiv.innerHTML = vogelcount;
        }
    }
}



console.log(dieren[randomgetal1]);
console.log(randomgetal2);
console.log(dierentuindieren);
console.log(vogelcount);
console.log(apencount);
