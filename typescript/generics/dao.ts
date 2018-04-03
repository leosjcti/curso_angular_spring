import { DaoInterface } from './dao.interface';

export class Dao<T> implements DaoInterface<T> {

    tableName: string;

    insert(object: T):boolean {
        return true;
    }
    update(object: T):boolean {
        return true;
    }

    delete(number: 5):boolean {
        return true;
    }

    find(number: 5):T {
        return null;
    }

    findAll():[T] {
        return null;
    }


}