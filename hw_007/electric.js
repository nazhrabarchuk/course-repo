import Vehicle from "./vehicle.js";

export default class Electric extends Vehicle {
    constructor(carModel, year, maxSpeed,  batLevel) {
        super(carModel, year, maxSpeed);
        this.level = batLevel;
        this.type = 'electric';
    }

    drive() {
        console.log(`Lets drive this: ${this.model} [${this.year}], battery level ${this.level}%.`);
    }  

    charge() {
        console.log(`Charging to 100%`)
        this.level = 100;
    }
    displayInfo(){
        console.log(`Electric car:`);
        super.displayInfo()
    }
}  