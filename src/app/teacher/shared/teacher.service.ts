import { Injectable } from '@angular/core';
import { ITeacherService } from './defs/teacher.service'
import { Teacher } from '../../core/teacher.model'

@Injectable()
export class TeacherService implements ITeacherService {

  private _teachers: Teacher[] = [];

  constructor() { 
    this.initDB();
  }

  private initDB(): void {
    this._teachers.push({ id: 1, name: "Pablo Andrés", lastName: "Diaz" });
    this._teachers.push({ id: 2, name: "Juan David", lastName: "Herrera" });
    this._teachers.push({ id: 3, name: "Carolina", lastName: "Hurtado" });
  }

  public listTeachers(): Teacher[] {
    return this._teachers;
  }

  public getTeacher(id: number): Teacher {
    return this._teachers.find(c => c.id === id);
  }

  public updateTeacher(teacher: Teacher): void {
    if(teacher == null || typeof teacher === 'undefined' || teacher.id == null || typeof teacher.id === 'undefined' || teacher.id <= 0) {
      throw 'Please provide a valid teacher';
    }

    let teacherFound: Teacher = this._teachers.find(c => c.id === teacher.id);
    if(teacherFound == null || typeof teacherFound === 'undefined') {
      throw 'Please provide a valid teacher';
    }

    teacherFound.name = teacher.name;
    teacherFound.lastName = teacher.lastName;
  }

  private getNextId(): number {
    let nextId: number = 1;
    if(this._teachers.length > 0) {
      this._teachers.forEach(c => {
        if(nextId < c.id) {
          nextId = c.id;
        }
      });
    }

    return  nextId;
  }

  public addTeacher(teacher: Teacher): void {
    teacher.id = this.getNextId();
    this._teachers.push(teacher);
  }

}
