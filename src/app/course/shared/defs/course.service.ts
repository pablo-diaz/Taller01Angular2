import { Course } from '../../../core/course.model'

export interface ICourseService {
    listCourses(): Course[];
    getCourse(id: number): Course;
    updateCourse(course: Course): void;
    addCourse(course: Course): void;
}