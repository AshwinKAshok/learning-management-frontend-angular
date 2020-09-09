import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) { }
  courseId = '';
  quizzes = [{
    _id: '',
    title: '',
    attempts: [],
  }];
  ngOnInit(): void {
    this.service.findAllQuizzes()
      .then(quizzes => {
        this.quizzes = quizzes;
        return quizzes.map(quiz => {
          console.log(quiz._id);
          return fetch(`https://cs5610-sp20-node-ass9.herokuapp.com/api/quizzes/${quiz._id}/attempts`)
            .then(response => response.json());
        });
      })
      .then(attemptPromises => {
        return Promise.all(attemptPromises);
      })
      .then(attempts => {
        console.log(attempts);
        for (let i = 0; i < this.quizzes.length; i++) {
          // @ts-ignore
          this.quizzes[i].attempts = attempts[i];
        }
      });
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
    });
  }
}
