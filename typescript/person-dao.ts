import { Person } from './person';
import { DaoInterface } from './dao.interface';

export class PersonDao implements DaoInterface {

    tableName: string;

    insert(person: Person):boolean {
        return true;
    }
    update(person: Person):boolean {
        return true;
    }

    delete(number: 5):boolean {
        return true;
    }

    find(number: 5):Person {
        return null;
    }

    findAll():[Person] {
        return null;
    }


}