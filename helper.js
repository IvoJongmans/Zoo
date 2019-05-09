helperFunctions = {
    getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomHumanName() {
        let names = ["Ivo", "Jeroen", "Micheal"];
        let nameint = helperFunctions.getRandomInt(0, names.length - 1);
        return names[nameint];
    },
    getRandomAnimalName() {
        let names = ["Floris", "Mike", "Diem"];
        let nameint = helperFunctions.getRandomInt(0, names.length - 1);
        return names[nameint];
    }
} 

