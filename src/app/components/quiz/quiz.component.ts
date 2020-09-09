import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../../services/question.service.client';
import {QuizServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuestionServiceClient,
              private quizService: QuizServiceClient,
              private route: ActivatedRoute) { }
  questions = [];
  quizId: number;
  quizAttempt = {
    score: undefined,
    _id: undefined
  };
  courseId: any;
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.courseId = ps.courseId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }

  submitQuiz = () => {
    this.quizService.submitQuiz(this.quizId, this.questions)
      .then((response) => {
        console.log(response);
        this.quizAttempt = response;
      });
  }


}
