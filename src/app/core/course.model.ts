import { Teacher } from './teacher.model'

export class Course {
    public name: string;
    public startingDate: Date;
    public duration: number;
    public taughtBy: Teacher;

    constructor() { }
}