import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question: {
    correct: any;
    _id: any;
    question: any;
    title: any;
  };
  @Input()
  answer: string;
  @Output()
  answerChange = new EventEmitter<string>()


submittedAnswer: string;
  submitted = false;
  faCheck = faCheck; faTimes = faTimes;
  ngOnInit(): void {
  }
  submitAnswer = () => {
    this.submitted = true;
    this.answerChange.emit(this.answer);
  }

  reset = () => {
    this.submitted = false;
  }
}
