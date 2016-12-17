import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Teacher } from '../../core/teacher.model';
import { ITeacherService } from '../../teacher/shared/defs/teacher.service';

import { Course } from '../../core/course.model';
import { ICourseService } from '../shared/defs/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  public course: Course = new Course();
  public teachers: Teacher[] = [];

  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, 
              @Inject('ICourseService') private _courseService: ICourseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.teachers = this._teacherService.listTeachers();
    this.course.taughtBy = new Teacher();

    let id: number;
    this.route.params.forEach((params: Params) => id = parseInt(params['id']));
    this._courseService.getCourse(id).subscribe((c) => {
      this.course = c;
    } );
  }

  public save() {
    this._courseService.updateCourse(this.course).subscribe(c => this.router.navigate(['/courses']));
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

}
