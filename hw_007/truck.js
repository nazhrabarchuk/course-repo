import Vehicle from "./vehicle.js";

export default class Truck extends Vehicle{
    constructor(carModel, carYear, maxSpeed, container){
        super(carModel, carYear, maxSpeed)
        this.type = 'truck';
        this.container = container;
    }

    transportContainer(){
        console.log(`I am strting transporting heavy container`);
    }

    displayInfo(){
        console.log(`
        |^^^^^^^^^^^^^^^^^^\||____
        |  The Truck ${this.model}  |||""|""\\___
        | _______________ |||__|__|___|)
        ...|(@)@)""""""""**|(@)(@)**|(@)
        `)
    }
    race(){
        return {
            model: this.model,
            speed: this.container && this.speed != 0 ? this.speed - 5 :  this.speed
        };
    }
}