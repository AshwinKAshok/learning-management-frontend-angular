import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' }
  submitted = false;
  faCheck = faCheck; faTimes = faTimes
  @Input()
  answer: string;
  @Output()
  answerChange = new EventEmitter<string>()
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
