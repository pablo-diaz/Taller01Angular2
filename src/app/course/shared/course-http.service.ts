import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ICourseService } from './defs/course.service';
import { Course } from '../../core/course.model';

@Injectable()
export class CourseHttpService implements ICourseService {
  private _serviceURL = 'api/courses';
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http) { }

  public listCourses(): Observable<Course[]> {
    return this._http.get(this._serviceURL).map(r => r.json().data as Course[]);
  }

  public getCourse(id: number): Observable<Course> {
    const url = `${this._serviceURL}/${id}`;
    return this._http.get(url).map(r => r.json().data as Course);
  }

  public updateCourse(course: Course): Observable<Course> {
    if(course == null || typeof course === 'undefined' || course.id == null || typeof course.id === 'undefined' || course.id <= 0) {
      throw 'Please provide a valid course';
    }

    const url = `${this._serviceURL}/${course.id}`;
    return this._http.put(url, JSON.stringify(course), { headers: this._headers }).map(() => course);
  }

  public addCourse(course: Course): Observable<Course> {
    course.id = null;
    return this._http.post(this._serviceURL, JSON.stringify(course), { headers: this._headers }).map(r => r.json().data as Course);
  }

}
