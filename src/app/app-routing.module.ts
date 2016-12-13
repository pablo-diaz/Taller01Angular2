import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'teachers',
    loadChildren: 'app/teacher/teacher.module#TeacherModule'
  },
  {
    path: 'courses',
    loadChildren: 'app/course/course.module#CourseModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
