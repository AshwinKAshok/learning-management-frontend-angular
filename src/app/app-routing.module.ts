import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {LessonTabsComponent} from './components/lesson-tabs/lesson-tabs.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';

const routes: Routes = [
  {path: 'layout/courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseViewerComponent},
  {path: 'layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: 'layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'layout/courses/:cid/modules', component: CourseViewerComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'layout/courses', component: CourseViewerComponent},
  {path: 'table/courses', component: CourseTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
