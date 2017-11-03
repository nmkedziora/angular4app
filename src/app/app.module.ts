import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
