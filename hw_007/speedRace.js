

export default class SpeedRace{
    constructor(...vehicle){
        this.vehicle = [...vehicle];
    }

    #parseSpeed(){
        let  vehicle = []
        for(let veh of this.vehicle){
            vehicle.push(veh.race());
        }
        
        return vehicle.sort((a, b) => {
            return b.speed - a.speed;
        });
    }

    run(){
       
        
        const vehicle = this.#parseSpeed();

        
        for(let place in vehicle){
            
            console.log(`Place #${(+place + 1)} has model ${vehicle[place].model} with max speed ${vehicle[place].speed}`)

        }

    
    }
}