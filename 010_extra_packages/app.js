import Randomstring from "randomstring";
import FileSystem from "file-system";
// generate random name & surname using ramdomstring
let randomName = Randomstring.generate({
charset: 'alphabetic',
length: 7,
capitalization: 'uppercase'
});

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
console.log(student);

let studentJson = JSON.stringify(student);
console.log(studentJson);

// create fileSystem instance
FileSystem.writeFile('student.txt', studentJson,
function (err) {
    if(err) throw err;
    console.log('File "student.txt" created with student object info!');
}
)
// let objFromFile = {};

//  FileSystem.readFile('student.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('data', data);
//     console.log('parse Data', JSON.parse(data));
//     objFromFile =   JSON.parse(data);
//    console.log('objFromFile', objFromFile);
//   })

    // let readFileObject = JSON.parse(readFile);
// console.log('readFileObject', readFileObject);

// console.log(JSON.stringify(read));
// console.log('readFileObject', readFileObject);


