import Electric from './electric.js'
import Car from './car.js';
import Truck from './truck.js';
import SpeedRace from './speedRace.js';


// create instance of electric car
const tesla = new Electric('Tesla', 2020, 300, 45);

// create instance of truck
const truck = new Truck('DAF',2012, 120, true);

//create instance of petrol car 
const opel = new Car('Opel', 2012,250, 50);

//creaete instance of petrol car calling static method (use builder pattern)
const volvo = Car.createPetrolCar('Volvo', 2020, 300, 45);

// ============== call diffenernt method for classes: =============== //

//# display Opel car info, used method displayInfo() calling father`s class
opel.displayInfo();

//# calling transportPeople() method from class Car
opel.transportPeople();

//# calling drive() method from class Car
volvo.drive();
 
//# display Tesla electric info, used method displayInfo() calling father`s class
tesla.displayInfo();

//# calling drive() method from Electric class 
tesla.drive();

//# charging Tesla to full battery level
tesla.charge();

//# calling drive() method from Electric class with full battery level
tesla.drive();

//# display DAF truck info, use overrided method displyaInfo()
truck.displayInfo();

//# call transportContainer() method from Truck class
truck.transportContainer();

// =================== RACE =================== //

// Let's arrange a race for instance cars !!! (use special class speedRace)

//#1 set & display(use getter) the speed for each cars:

// for Opel: 
opel.increaseSpeed(60);
opel.getSpeed;

// for tesla:
tesla.increaseSpeed(200);
tesla.getSpeed;

// for truck:
truck.increaseSpeed(100);
truck.getSpeed;


// push instance cars to the race:
const race = new SpeedRace(tesla, opel, truck);

// output the race result
console.log(`RUN THE RACE!`);
console.log('RACE RESULT:');
race.run();
console.log(`Congratulation!!!`);