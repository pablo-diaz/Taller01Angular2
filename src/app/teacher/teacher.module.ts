import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';

import { TeacherService } from './shared/teacher.service';

import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeacherRoutingModule
  ],
  declarations: [TeacherListComponent, TeacherEditComponent, TeacherAddComponent],
  providers: [{provide: 'ITeacherService', useClass: TeacherService}]
})
export class TeacherModule { }
