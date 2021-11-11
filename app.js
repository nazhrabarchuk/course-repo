import Randomstring from "randomstring";
import * as fs from 'fs';

// generate random name using ramdomstring
let randomName = Randomstring.generate({
charset: 'alphabetic',
length: 7,
capitalization: 'uppercase'
});

// generate random surname using ramdomstring
let randomSurname = Randomstring.generate({
    charset: 'alphabetic',
    length: 15,
    capitalization: 'uppercase'
});

// generate random rate using Math.random
let randomRate = Math.floor((Math.random() * 100) + 1);

// create student object and set properties
const student = {
    name: randomName,
    surname: randomSurname,
    rate: randomRate
}
console.log('Student object with random values: ', student);

//convert student object to JSON format
let studentObjectJson = JSON.stringify(student);
console.log('JSON.stringify student object: ', studentObjectJson);

try{
    // write Student Object to student.txt file
    const writeStudentObjectIntoFile = fs.writeFileSync('student.txt', studentObjectJson)
    console.log('Created file "student.txt" with student object data');

    // buffer with existed 'student.txt' file data
    const buffer = fs.readFileSync('student.txt', 'utf-8');

    //parse JSON string data to object
    const studentFromFile = JSON.parse(buffer);
    console.log('buffer', JSON.parse(buffer));

    //make some change to object from student.txt file
    studentFromFile.changed = true;
    console.log('Changed student object: ', studentFromFile);

    //push new sting line with changed object data to student.txt file
    const writeChangedUserToFile = fs.appendFileSync('student.txt', JSON.stringify(studentFromFile))
    console.log('Pushed changed student object to student.txt file');
    
}catch(e){
    console.log('Error:', e);
}



