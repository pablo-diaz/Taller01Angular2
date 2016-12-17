import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ITeacherService } from './defs/teacher.service'
import { Teacher } from '../../core/teacher.model'

@Injectable()
export class TeacherHttpService implements ITeacherService {
  private _serviceURL = 'api/teachers';
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  
  constructor(private _http: Http) { }

  public listTeachers(): Observable<Teacher[]> {
    return this._http.get(this._serviceURL).map(r => r.json().data as Teacher[]);
  }

  public getTeacher(id: number): Observable<Teacher> {
    const url = `${this._serviceURL}/${id}`;
    return this._http.get(url).map(r => r.json().data as Teacher);
  }

  public updateTeacher(teacher: Teacher): Observable<Teacher> {
    if(teacher == null || typeof teacher === 'undefined' || teacher.id == null || typeof teacher.id === 'undefined' || teacher.id <= 0) {
      throw 'Please provide a valid teacher';
    }

    const url = `${this._serviceURL}/${teacher.id}`;
    return this._http.put(url, JSON.stringify(teacher), { headers: this._headers }).map(() => teacher);
  }

  public addTeacher(teacher: Teacher): Observable<Teacher> {
    teacher.id = null;
    return this._http.post(this._serviceURL, JSON.stringify(teacher), { headers: this._headers }).map(r => r.json().data as Teacher);
  }

}
