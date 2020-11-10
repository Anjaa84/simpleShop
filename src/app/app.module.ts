import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import {ComboComponent} from './combo.component';
import {ComboServices} from './combo.services';

@NgModule({
  declarations: [
    AppComponent,
    // CourseComponent,
    ComboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ComboServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
