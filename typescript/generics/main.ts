import { DaoInterface } from './dao.interface';
import { Person } from '../person';
import { Dao } from './dao';


let dao: DaoInterface<Person> = new Dao<Person>();

let person:Person = new Person('Leonardo');

dao.insert(person);