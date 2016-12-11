import { Teacher } from './teacher.model'

export class Course {
    public id: number;
    public name: string;
    public startingDate: Date;
    public duration: number;
    public taughtBy: Teacher;

    constructor() { }
}