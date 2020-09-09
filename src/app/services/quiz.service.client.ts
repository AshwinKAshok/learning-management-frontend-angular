import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(' https://cs5610-sp20-node-ass9.herokuapp.com/api/quizzes')
      .then(response => response.json())

  findQuizById = (qid) =>
    fetch(` https://cs5610-sp20-node-ass9.herokuapp.com//api/quizzes/${qid}`)
      .then(response => response.json())

  submitQuiz = (quizId, questions) => {
    console.log(questions);
    return fetch(`https://cs5610-sp20-node-ass9.herokuapp.com/api/quizzes/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }

  findQuizAttemptsByQuizId = (quizId) => {
    return fetch(`https://cs5610-sp20-node-ass9.herokuapp.com/api/quizzes/${quizId}/attempts`)
      .then((response) => response.json());
  }
}
