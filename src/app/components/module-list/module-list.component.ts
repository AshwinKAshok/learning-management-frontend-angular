import {Component, Input, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute,
              private courseService: CourseServiceClient) {}

  courseId: '';
  moduleId: '';
  courseName: '';
  moduleList: any[];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      // this.moduleId = params.mid;
      this.service.findModulesForCourse(this.courseId).then(response => this.moduleList = response);
      this.courseService.findCourseById(this.courseId).then(response => this.courseName = response.courseTitle);
    });

    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
    });
  }

}
