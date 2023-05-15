import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../app/core/core.module';
import { AppService } from '../app/app.service';
import { FeedbackComponent } from '../app/components/feedback/feedback.component';
import { MyLink1Component } from '../app/components/my-link1/my-link1.component';
import { MyLink2Component } from '../app/components/my-link2/my-link2.component';
import { MyLink3Component } from '../app/components/my-link3/my-link3.component';
import { MyLink4Component } from '../app/components/my-link4/my-link4.component';

@NgModule({
  declarations: [
    AppComponent, FeedbackComponent, MyLink1Component, MyLink2Component, MyLink3Component, MyLink4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
