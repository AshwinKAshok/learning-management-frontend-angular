import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { CourseServiceClient } from './services/CourseService';
import {ModuleServiceClient} from './services/ModuleService';
import {LessonServiceClient} from './services/LessonService';
import { TopicPillComponent } from './components/topic-pill/topic-pill.component';
import {TopicServiceClient} from './services/TopicService';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {QuestionServiceClient} from './services/question.service.client';
import { QuizComponent } from './components/quiz/quiz.component';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseViewerComponent,
    TopicPillComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
