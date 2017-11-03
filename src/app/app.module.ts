import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CourseComponent } from './components/course/course.component';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
