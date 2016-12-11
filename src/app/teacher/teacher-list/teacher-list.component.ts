import { Component, OnInit, Inject } from '@angular/core';

import { ITeacherService } from '../shared/defs/teacher.service';
import { Teacher } from '../../core/teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers: Teacher[];
  
  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService) { }

  ngOnInit() {
    this.teachers = this._teacherService.listTeachers();
  }

}
