import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findTopicsForLessons = (lessonId) =>
    fetch(`https://cs5610-sp20-server-jpa.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())
}
