import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Teacher } from '../../core/teacher.model';
import { ITeacherService } from '../shared/defs/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  public teacher: Teacher = new Teacher();

  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    this.route.params.forEach((params: Params) => id = parseInt(params['id']));
    this._teacherService.getTeacher(id).subscribe(t => this.teacher = t);
  }

  public save() {
    this._teacherService.updateTeacher(this.teacher).subscribe(t => this.router.navigate(['/teachers']));
  }

  public cancel() {
    this.router.navigate(['/teachers']);
  }

}
