import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from '../../core/teacher.model';
import { ITeacherService } from '../../teacher/shared/defs/teacher.service';

import { Course } from '../../core/course.model';
import { ICourseService } from '../shared/defs/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  public course: Course = new Course();
  public teachers: Teacher[] = [];

  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, 
              @Inject('ICourseService') private _courseService: ICourseService,
              private router: Router) { }

  ngOnInit() {
    this._teacherService.listTeachers().subscribe(t => this.teachers = t);
  }

  public save() {
    this._courseService.addCourse(this.course).subscribe(c => this.router.navigate(['/courses']));
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

}
