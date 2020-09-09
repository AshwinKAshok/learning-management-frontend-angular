import {Component, Input, OnInit} from '@angular/core';
import {LessonServiceClient} from '../../services/LessonService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) { }

  courseId: '';
  moduleId: '';
  lessonId: '';
  lessonList: any[];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.service.findLessonsForModules(this.moduleId).then(response => this.lessonList = response);
    });
  }


  // @Input() get moduleIdentifier(): '' {
  //   return this.moduleId;
  // }
  //
  // set moduleIdentifier(value: '') {
  //   if (value) {
  //     this.moduleId = value;
  //     this.service.findLessonsForModules(this.moduleId).then(response => this.lessonList = response);
  //   }
  // }
  //
  // @Input() get courseIdentifier(): '' {
  //   return this.courseId;
  // }
  //
  // set courseIdentifier(value: '') {
  //   if (value) {
  //     this.courseId = value;
  //   }
  // }

}
