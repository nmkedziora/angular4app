import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CourseComponent } from './components/course/course.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { InputFavoriteComponent } from './components/input-favorite/input-favorite.component';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';
import { TweetLikeComponent } from './components/tweet-like/tweet-like.component';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';

import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { FormComponent } from './components/form/form.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourseComponent,
    FavoriteComponent,
    InputFavoriteComponent,
    BootstrapPanelComponent,
    TweetLikeComponent,
    SummaryPipe,
    TitleCasePipe,
    InputFormatDirective,
    ZippyComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
