import {Component, Input, OnInit} from '@angular/core';
import {LessonServiceClient} from '../../services/LessonService';
import {TopicServiceClient} from '../../services/TopicService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pill.component.html',
  styleUrls: ['./topic-pill.component.css']
})
export class TopicPillComponent implements OnInit {

  courseId: '';
  moduleId: '';
  lessonId: '';
  topicId: '';
  topicList: any[];

  constructor(private service: TopicServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.topicId = params.tid;
      this.service.findTopicsForLessons(this.lessonId).then(response => this.topicList = response);
    });
  }


  // @Input() get lessonIdentifier(): '' {
  //   return this.lessonId;
  // }
  //
  // set lessonIdentifier(value: '') {
  //   if (value) {
  //     this.lessonId = value;
  //     this.service.findTopicsForLessons(this.lessonId).then(response => {
  //       this.topicList = response;
  //       console.log(this.topicList);
  //     });
  //   }
  // }

}
