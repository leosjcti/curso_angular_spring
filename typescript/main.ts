import { DaoInterface } from './dao.interface';
import { PersonDao } from './person-dao';
import { Person } from "./person";
import { Students } from "./student";

//let p = new Person('Leonardo');
//p.showAge(31);

//let s = new Students('Juliana');
//s.showAge(25);

let personDao: DaoInterface = new PersonDao();

let person = new Person('Leonardo');

personDao.insert(person); 