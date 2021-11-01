export default class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }

    get getSpeed(){
        console.log(`The speed of ${this.model} is : ${this.speed}`);
    }

    #drive() {
        console.log(`Lest drive this: ${this.model} [${this.year}] `)
    }
    callDrive(){
        this.#drive()
    }
    
    displayInfo(){
        console.log(`Name: ${this.model}, year: ${this.year}, max speed: ${this.maxSpeed}, type: ${this.type};`);
    }

    increaseSpeed(increment){
        this.speed = this.speed + increment;
    }
    race(){
        return {
            model: this.model,
            speed: this.speed
        };
    }
}
