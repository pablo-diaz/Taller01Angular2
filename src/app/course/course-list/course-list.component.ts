import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ICourseService } from '../shared/defs/course.service';
import { Course } from '../../core/course.model';

import { SortDirection } from '../../shared/sort-direction.enum';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[];
  public currentDate: Date = new Date();

  private lastSortedProperty: string = '';
  private sortedOrientation: SortDirection = SortDirection.ASC;

  constructor(@Inject('ICourseService') private _courseService: ICourseService, private router: Router) { }

  ngOnInit() {
    this.courses = this._courseService.listCourses();
    this.sortBy('name');
  }

  public onSelect(course: Course) {
    this.router.navigate(['/editcourse', course.id]);
  }

  public newCourse() {
    this.router.navigate(['/addcourse']);
  }

  public sortBy(property: string): void {
    if(this.lastSortedProperty === property) {
      this.sortedOrientation = this.sortedOrientation === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;  
    }
    else {
      this.lastSortedProperty = property;
      this.sortedOrientation = SortDirection.ASC;
    }

    let sortFactor = this.sortedOrientation === SortDirection.ASC ? 1 : -1;
    this.courses.sort((a: Course, b: Course) => a[property].toString().localeCompare(b[property].toString()) * sortFactor);
  }

}
