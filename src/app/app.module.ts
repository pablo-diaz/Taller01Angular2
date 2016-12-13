import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { HomeModule } from './home/home.module';

import { TeacherService } from './teacher/shared/teacher.service';
import { CourseService } from './course/shared/course.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeacherModule,
    CourseModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'ITeacherService', useClass: TeacherService },
    { provide: 'ICourseService', useClass: CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
