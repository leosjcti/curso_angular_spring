"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_dao_1 = require("./person-dao");
var person_1 = require("./person");
//let p = new Person('Leonardo');
//p.showAge(31);
//let s = new Students('Juliana');
//s.showAge(25);
var personDao = new person_dao_1.PersonDao();
var person = new person_1.Person('Leonardo');
personDao.insert(person);
//# sourceMappingURL=main.js.map