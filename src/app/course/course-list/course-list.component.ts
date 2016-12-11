import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ICourseService } from '../shared/defs/course.service';
import { Course } from '../../core/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[];

  constructor(@Inject('ICourseService') private _courseService: ICourseService, private router: Router) { }

  ngOnInit() {
    this.courses = this._courseService.listCourses();
  }

  public onSelect(course: Course) {
    this.router.navigate(['/editcourse', course.id]);
  }

  public newCourse() {
    this.router.navigate(['/addcourse']);
  }

}
