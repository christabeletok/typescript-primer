"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Christabel";
console.log(name);
let count = 10;
name = 'Paul';
console.log(name);
count = 5;
const tools_1 = __importStar(require("./tools"));
/*const person1 = new Person("Christabel", "Etok", "female",1.7,["dancing","movies","etc"],new Date("2002-05-"),true);*/
const person1Data = {
    firstName: "Christabel",
    lastName: "Etok",
    gender: "female",
    height: 1.7,
    hobbies: ["dancing", "movies", "etc"],
    birthday: new Date("2002-05-23"),
    isAlive: true
};
//instantiate a person passing person1data above as properties of the person
const person1 = new tools_1.Person(person1Data);
const pronoun = person1.gender === "male" ? "He" : "She";
(0, tools_1.default)(`The first person is ${person1.firstName} ${person1.lastName},
${pronoun} likes ${person1.hobbies.join(" , ")},
${pronoun} was born on ${person1.birthday.toLocaleDateString("en-NG")}`);
(0, tools_1.default)(person1.firstName);
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
//# sourceMappingURL=index.js.map