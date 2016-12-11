import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseComponent, CourseListComponent, CourseEditComponent]
})
export class CourseModule { }
