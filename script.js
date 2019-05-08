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


const dier = new Dier("paars");
const ivo = new Mens("Ivo Jongmans");
const aap1 = new Aap("Bruin", "Ja, ik heb een staart!");
const vogel1 = new Vogel("Geel", 100);
const verzorger1 = new Verzorger("Jeroen de Reus", "Vogels");
const bezoeker1 = new Bezoeker("Micheal Schmidt Crans", 45552760);

console.log(ivo.naam);
ivo.loop();

console.log(aap1.kleur);
console.log(aap1.heeftstaart);
aap1.klim();

console.log(vogel1.kleur);
console.log(vogel1.vliegsnelheid);
vogel1.vlieg();

console.log(verzorger1.naam);
console.log(verzorger1.diersoort);
verzorger1.voer();

console.log(bezoeker1.naam);
console.log(bezoeker1.ticketid);
bezoeker1.kijk();


