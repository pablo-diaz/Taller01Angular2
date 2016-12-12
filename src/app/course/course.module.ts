import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './course-add/course-add.component';

import { BaseStateComponent } from './shared/comps/base-state.component';

import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ],
  declarations: [CourseListComponent, CourseEditComponent, CourseAddComponent, BaseStateComponent],
  providers: []
})
export class CourseModule { }
