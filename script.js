
let dieren = ["Aap", "Vogel", "Orka"];
let kleuren = ["geel", "groen", "bruin", "zwart"];
let dierentuindieren = [];

class Park {
    constructor(parknaam) {
        this.parknaam = parknaam;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    fillZoo(aantaldieren) {  
             
        
        for (let i=0; i < aantaldieren; i++) {
    
        let randomkleuren = this.getRandomInt(0, kleuren.length -1);
            
        let randomdieren = this.getRandomInt(0, dieren.length - 1);        
    
         if (randomdieren == 0) {
             dierentuindieren.push(new Vogel(kleuren[randomkleuren], 100));         
         }
         else if (randomdieren == 1) {
            dierentuindieren.push(new Aap(kleuren[randomkleuren], "ja"));
         }
         else if (randomdieren == 2) {
            dierentuindieren.push(new Orka(kleuren[randomkleuren], 50));  
         }
        }
    }
    
}


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
class Orka extends Dier {
    constructor(kleur, zwemsnelheid) {
        super(kleur);
        this.zwemsnelheid = zwemsnelheid;
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

// function countAnimals() {
//     for (let i = 0; i < dierentuindieren.length; i++) {
//         if ()
//     }
// }

let parkivo = new Park("Ivo's Paradise");
parkivo.fillZoo(3);
console.log(dierentuindieren);


