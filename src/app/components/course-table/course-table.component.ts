import {Component, Input, OnInit} from '@angular/core';
import { CourseServiceClient } from '../../services/CourseService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  courses = [];
  courseId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
    });

    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
