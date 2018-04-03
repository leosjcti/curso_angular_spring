import { Person } from './person';

export class Students extends Person {

    constructor(name: string) {
        super(name);
    }

    public showAge(age: number):void{
        console.log("Studying ...");
        super.showAge(25);
    }
}