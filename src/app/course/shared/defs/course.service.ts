import { Observable } from 'rxjs/Rx';

import { Course } from '../../../core/course.model'

export interface ICourseService {
    listCourses(): Observable<Course[]>;
    getCourse(id: number): Observable<Course>;
    updateCourse(course: Course): Observable<Course>;
    addCourse(course: Course): Observable<Course>;
}