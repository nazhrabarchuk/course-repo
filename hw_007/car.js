import Vehicle from "./vehicle.js"

export default class Car extends Vehicle{
    constructor(carModel, carYear,maxSpeed, fuel){
        super(carModel,carYear, maxSpeed)
        this.type = 'petrol';
        this.fuel = fuel;
    }

    
    static createPetrolCar(carModel, carYear,maxSpeed, fuel){
        
        const car = new Car(carModel, carYear, maxSpeed, fuel);
    
        if(car > 2017){
            car.setCarStatus(true);
        }

        car.setType('petrol');

        return car;

    }

    setType(type){
        this.type = type;
        return this;
    }

    setCarStatus(status){
        this.status = status;
        return status;
    }

    transportPeople(){
        console.log(`Ì am starting transportiтg passengers`);
    }
    displayInfo(){
        console.log(`Petrol car:`);
        super.displayInfo()
    }
    drive(){
        console.log(`Lets drive this: ${this.model} [${this.year}], amount of fuel ${this.fuel} liters.`);
    }
}
