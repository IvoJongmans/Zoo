class Park {
    constructor(parknaam) {
        this.parknaam = parknaam;
        this.dierentuindieren = [];
        this.openofdicht = helperFunctions.getRandomInt(0,1);     
        this.tickets = [];
    }
    
    fillZoo(aantaldieren) {  
        this.dierentuindieren = [];
        this.dieren = ["Aap", "Vogel", "Orka"];
        this.kleuren = ["geel", "groen", "bruin", "zwart"];
        this.aapinfo = document.getElementById("aapinfo");
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

    sellTicket() {
        let ticketnr = "#" + helperFunctions.getRandomInt(0,9) + helperFunctions.getRandomInt(0,9) + helperFunctions.getRandomInt(0,9) + helperFunctions.getRandomInt(0,9);
        let naamticket = document.getElementById("ticketname").value;
        this.tickets.push(new Klant(naamticket, ticketnr));
    }

    checkTicket() {
        let displaynaam = document.getElementById("displayticketnr");
        let nrticket = document.getElementById("checkticketid").value;
        for (let i = 0; i < this.tickets.length; i++) {
            if (nrticket == this.tickets[i].ticketid) {
                displaynaam.innerHTML = 'Dit ticket is van: ' + this.tickets[i].naam;
            }
        }
    }

    createParkArch() {
        let parknaam = parkivo.parknaam;
        let lengthparknaam = parknaam.length - 1;
        let rotate = 180 / lengthparknaam;
        let initial = 0;
        let initialrotate = -90;
        let headerDiv = document.getElementById("zooHeader");   
        for (let i=0; i < parknaam.length; i++) {
            headerDiv.innerHTML += `<div id="${i}" style=> ${parknaam[i]} </div>`;
            document.getElementById(i).style.transform = "rotate(" + (initialrotate  + initial) + "deg)";
            initial += rotate;
        }
    }
    
    doorsOpenClosed() {
        if (this.openofdicht == 0) {
            document.getElementById("gateopened").style.display = "none";
            document.getElementById("gateclosed").style.display = "block";
        }
        else {
            document.getElementById("gateclosed").style.display = "none";
            document.getElementById("gateopened").style.display = "block";             
        }
    }

    countAnimals(){
        let Aapcount = 0;
        let Orkacount = 0;
        let Vogelcount = 0;
        let apendiv = document.getElementById("aapinfo");
        this.dierentuindieren.forEach(function(element, index){
         if (element.constructor.name === 'Aap'){
             Aapcount += 1;
             apendiv.innerHTML += "Apen: " + Aapcount;
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
        this.naam = document.getElementById("ticketname").value;
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

class Klant extends Mens {
    constructor(naam, ticketid) {
        super(naam);
        this.ticketid = ticketid;
    }
    kijk() {
        console.log("Ik kijk op dit moment naar de Olifanten!");
    }
}

let parkivo = new Park("sanne's zoo");
parkivo.createParkArch();
parkivo.doorsOpenClosed();
parkivo.countAnimals();

// var kaarten = parkivo.tickets;
// console.log(kaarten);
// localStorage.setItem('soldtickets', JSON.stringify(kaarten));
// JSON.parse(window.localStorage.getItem('soldtickets'));
// var getkaartenstring = localStorage.getItem("soldtickets");
// var getkaarten = JSON.parse(getkaartenstring);
// console.log(getkaarten);