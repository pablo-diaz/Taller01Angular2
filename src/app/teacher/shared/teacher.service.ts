import { Injectable } from '@angular/core';
import { ITeacherService } from './defs/teacher.service'
import { Teacher } from '../../core/teacher.model'

@Injectable()
export class TeacherService implements ITeacherService {

  private _teachers: Teacher[];

  constructor() { }

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

}
