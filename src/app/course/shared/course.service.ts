import { Injectable } from '@angular/core';
import { ICourseService } from './defs/course.service'
import { Course } from '../../core/course.model'

@Injectable()
export class CourseService implements ICourseService {

  private _courses: Course[];

  constructor() { }

  public listCourses(): Course[] {
    return this._courses;
  }

  public getCourse(id: number): Course {
    return this._courses.find(c => c.id === id);
  }

  public updateCourse(course: Course): void {
    if(course == null || typeof course === 'undefined' || course.id == null || typeof course.id === 'undefined' || course.id <= 0) {
      throw 'Please provide a valid course';
    }

    let courseFound: Course = this._courses.find(c => c.id === course.id);
    if(courseFound == null || typeof courseFound === 'undefined') {
      throw 'Please provide a valid course';
    }

    courseFound.name = course.name;
    courseFound.startingDate = course.startingDate;
    courseFound.duration = course.duration;
    courseFound.taughtBy = course.taughtBy;
  }

}
