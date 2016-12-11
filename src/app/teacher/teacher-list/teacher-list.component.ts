import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ITeacherService } from '../shared/defs/teacher.service';
import { Teacher } from '../../core/teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers: Teacher[];
  
  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, private router: Router) { }

  ngOnInit() {
    this.teachers = this._teacherService.listTeachers();
  }

  public onSelect(teacher: Teacher) {
    this.router.navigate(['/editteacher', teacher.id]);
  }

  public newTeacher() {
    this.router.navigate(['/addteacher']);
  }

}
