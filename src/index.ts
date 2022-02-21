/*let name: string = "Christabel";

console.log(name)

let count: number = 10
name ='Paul';

console.log(name)

count = 5


import logger, {IPersonData, Person} from './tools';

/*const person1 = new Person("Christabel", "Etok", "female",1.7,["dancing","movies","etc"],new Date("2002-05-"),true);*/
/*const person1Data: IPersonData = {
  firstName: "Christabel",
  lastName: "Etok",
  //gender: "female",
  gender: Gender.F,
  height: 1.7, //question mark here means optional
  hobbies: ["dancing","movies","etc"],
  birthday: new Date ("2002-05-23"), //question mark here means optional
  isAlive: true
}

//instantiate a person passing person1data above as properties of the person
const person1 = new Person(person1Data);


//const pronoun = person1.gender === "male"? "He":"She";
const pronoun = person1.gender === Gender.F? "He" : "She"

logger(`The first person is ${person1.firstName} ${person1.lastName},
${pronoun} likes ${person1.hobbies.join(" , ")},
${pronoun} was born on ${person1.birthday.toLocaleDateString("en-NG")}`);
logger(person1.firstName);




//Accessing object properties
/*let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis','Programming'];
let birthday = new Date(1900,4,5);
let isAlive = true;
let person2 = new Person(firstName, lastName, sgender, height,
 hobbies, birthday, isAlive)
logger(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is $ {person1.birthday.toLocaleDateString()}`);*/



let name: string = "pius";

console.log(name)

let count: number = 10
name = 'paul';

console.log(name)

count = 5

import travisLog, {Gender, IPersonData, Person} from './tools';
/*
const person1 = new Person(
    "fathia",
    "salaudin",
    "female",
    1.7,
    ["singing","baking","etc"],
    new Date("1990-08-08"),
    true
);*/

const person1Data: IPersonData = {
    firstName: "Fathia",
    lastName: "Salaudin",
    gender: Gender.F,
    height: 1.7,
    hobbies: ["singing","baking","etc"],
    birthday: new Date("1990-08-08"),
    isAlive: true

}
 const person1 = new Person(person1Data);

 const pronoun = person1.gender === Gender.F? "he": "she";

travisLog(`the first person is ${person1.firstName} ${person1.lastName}, 
${pronoun} likes ${person1.hobbies.join(" , ")} ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
travisLog(person1.firstName);