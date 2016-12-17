import { Teacher } from './../core/teacher.model';
import { Course } from './../core/course.model';

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let courses: Course[] = [];
        let teachers: Teacher[] = [];

        return { courses, teachers };
    }
} 