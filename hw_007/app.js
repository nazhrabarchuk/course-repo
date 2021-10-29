import Vehicle from './vehicle.js'
import Electric from './electric.js'
import Car from './car.js';
import Truck from './truck.js';
import SpeedRace from './speedRace.js';


const tesla = new Electric('Tesla', 2020, 300, 45);

const car = Car.createPetrolCar('T', 2020, 300, 45);

car.displayInfo();

const opel = new Car('Opel', 2012,250, 50);
tesla.displayInfo();
opel.displayInfo();
tesla.drive();
opel.drive();

opel.increaseSpeed(75);
tesla.increaseSpeed(125);


const truck = new Truck('Putin',2012, 120, true);
truck.increaseSpeed(80);

const race = new SpeedRace(tesla, opel, truck);

race.run();




// tesla.charge();
// tesla.drive();

// tesla.getSpeed;
// tesla.increaseSpeed(10);
// tesla.getSpeed;
// tesla.increaseSpeed(290);
// tesla.getSpeed;
// tesla.increaseSpeed(290);
// tesla.getSpeed;
// new Vehicle('Ford', 2000).callDrive();