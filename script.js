class Park {
    constructor(parknaam) {
        this.parknaam = parknaam;
        this.dierentuindieren = [];
    }
    
    fillZoo(aantaldieren) {  
        this.dierentuindieren = [];
        this.dieren = ["Aap", "Vogel", "Orka"];
        this.kleuren = ["geel", "groen", "bruin", "zwart"];
        for (let i=0; i < aantaldieren; i++) {
    
        let randomkleuren = helperFunctions.getRandomInt(0, this.kleuren.length -1);
            
        let randomdieren = helperFunctions.getRandomInt(0, this.dieren.length - 1);        
    
         if (randomdieren == 0) {
             this.dierentuindieren.push(new Vogel(this.kleuren[randomkleuren], 100));         
         }
         else if (randomdieren == 1) {
            this.dierentuindieren.push(new Aap(this.kleuren[randomkleuren], "ja"));
         }
         else if (randomdieren == 2) {
            this.dierentuindieren.push(new Orka(this.kleuren[randomkleuren], 50));  
         }
        }
    }    

    countAnimals(){
        let Aapcount = 0;
        let Orkacount = 0;
        let Vogelcount = 0;
        let apendiv = document.getElementById("apendiv");
        this.dierentuindieren.forEach(function(element, index){
         if (element.constructor.name === 'Aap'){
             Aapcount += 1;
             apendiv.innerHTML = "Apen: " + Aapcount;
            }
         else if (element.constructor.name === 'Orka'){
             Orkacount += 1;
             orkadiv.innerHTML = "Orka's: " + Orkacount;
            }
         else if (element.constructor.name === 'Vogel'){
             Vogelcount += 1;
             vogeldiv.innerHTML = "Vogels: " + Vogelcount;
            }
            apendiv.innerHTML = "Apen: " + Aapcount;
        });
    }
}

class Dier {
    constructor(kleur) {
        this.kleur = kleur;
        this.naam = helperFunctions.getRandomAnimalName();
    }
    eat() {
        console.log("Ik ben aan het eten!");
    }
}

class Mens {
    constructor() {
        this.naam = helperFunctions.getRandomHumanName();
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

let parkivo = new Park("Ivo's Paradise");
let bezoekerivo = new Bezoeker("", 2324);
console.log(bezoekerivo);
parkivo.fillZoo(10);
parkivo.countAnimals();
console.log(parkivo.dierentuindieren);
h1 = document.getElementById("zooH1");
h1.innerHTML = parkivo.parknaam;