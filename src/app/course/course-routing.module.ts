import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './course-add/course-add.component';

const courseRoutes: Routes = [
  { path: 'courses',  component: CourseListComponent },
  { path: 'addcourse',  component: CourseAddComponent },
  { path: 'editcourse/:id', component: CourseEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule { }