import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from '../../core/teacher.model';
import { ITeacherService } from '../shared/defs/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  public teacher: Teacher = new Teacher();

  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, private router: Router) { }

  ngOnInit() {
  }

  public save() {
    this._teacherService.addTeacher(this.teacher);
    this.router.navigate(['/teachers']);
  }

  public cancel() {
    this.router.navigate(['/teachers']);
  }

}
