//******************************************//
//Enter your implementation for Task 3 here.//
//******************************************//

/**
 * hero - This is the character that will be buying from the shop.
 * 
 * name: String - The hero's name.
 * title: String - The hero's title.
 * weapon: Weapon - The currently equipped Weapon.
 * armour: Armour - The currently equipped Armour.
 * equip: method(Weapon||Armour) - Will check if the equipment is a weapon or armour and equip it accordingly.
 * buyWeapon: method(Array) - Takes in an array of Weapons. Loops through all weapons in the array. Compares with the currently equipped weapon. 
                              If its damagePoints is less than the weapon the shop offer hero will "buy" it (effectively running the equip method).
 * buyArmour: method(Array) - Same functionality as buyWeapon but with an array of Armour.
 * 
**/


/*

let item = {
    name: "sword",
    itemLevel: 86,
    damage: "100",
    modifiers: ["prefix1", "prefix2", "prefix3", "suffix1", "suffix2", "suffix3"],
    sockets: ["R", "R", "R"]
};

let character = {
    name: "characterName",
    equipped: null,
    equip: function(item) {
        this.equipped = item;
    }
};

character.equip(item);
console.log(character.equipped.sockets);

*/




class Equipment {
    constructor (equipmentName, price) {
        this.equipmentName = equipmentName;
        this.price = price;
    }
};

class Weapon extends Equipment {
    constructor (equipmentName, price, weaponType, damagePoints) {
        super(equipmentName, price);
        this.weaponType = weaponType;
        this.damagePoints = damagePoints;
    }
};

class Armour extends Equipment {
    constructor (equipmentName, price, armourType, defencePoints) {
        super(equipmentName, price);
        this.armourType = armourType;
        this.defencePoints = defencePoints;
    }
};


let weapons = [new Weapon("wood sword", 15, "sword", 5), new Weapon("iron sword", 40, "sword", 15)];
let armour = [new Armour("leather armour", 30, "armour", 10), new Armour("iron armour", 80, "armour", 30)];

console.log("Weapon: " + weapons[0].equipmentName);
console.log("Price: " + weapons[0].price);
console.log("Type: " + weapons[0].weaponType);
console.log("Damage: " + weapons[0].damagePoints);

console.log("Weapon: " + weapons[1].equipmentName);
console.log("Price: " + weapons[1].price);
console.log("Type: " + weapons[1].weaponType);
console.log("Damage: " + weapons[1].damagePoints);


console.log("Weapon: " + armour[0].equipmentName);
console.log("Price: " + armour[0].price);
console.log("Type: " + armour[0].armourType);
console.log("Defence: " + armour[0].defencePoints);

console.log("Weapon: " + armour[1].equipmentName);
console.log("Price: " + armour[1].price);
console.log("Type: " + armour[1].armourType);
console.log("Defence: " + armour[1].defencePoints);





var hero = {
    name: "Console Log",
    title: "Hero of the Land",
    weapon: new Weapon("Wooden Sword", 0, "Sword", 5),
    armour: new Armour("Dad's Chainmail", 0, "Body", 20),
    money: 150,
    
    equip: function(equipment){
        if(equipment.constructor.name === "Weapon"){
            this.weapon = equipment;
        } else if (equipment.constructor.name === "Armour"){
            this.armour = equipment;
        }
    },
    
    buyWeapon: function(shopWeapons){
        //TODO Complete the implementation of this method
        console.log(this.weapon.equipmentName);
        console.log("Money: " + this.money);
        for (let weapon = 0; weapon < shopWeapons.length; weapon++) {
            if (this.weapon.damagePoints < shopWeapons[weapon].damagePoints && this.money >= shopWeapons[weapon].price) {
                this.weapon = shopWeapons[weapon];
                this.money -= shopWeapons[weapon].price;
            };
        };
        console.log(this.weapon.equipmentName);
        console.log("Money: " + this.money);
    },
    
    buyArmour: function(shopArmour){
        //TODO Complete the implementation of this method
        console.log(this.armour.equipmentName);
        console.log("Money: " + this.money);
        for (let armour = 0; armour < shopArmour.length; armour++) {
            if (this.armour.defencePoints < shopArmour[armour].defencePoints && this.money >= shopArmour[armour].price) {
                this.armour = shopArmour[armour];
                this.money -= shopArmour[armour].price;
            };
        };
        console.log(this.armour.equipmentName);
        console.log("Money: " + this.money);
    }
}

hero.buyWeapon(weapons);
hero.buyArmour(armour);
