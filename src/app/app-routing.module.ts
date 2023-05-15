import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MyLink1Component } from './components/my-link1/my-link1.component';
import { MyLink2Component } from './components/my-link2/my-link2.component';
import { MyLink3Component } from './components/my-link3/my-link3.component';
import { MyLink4Component } from './components/my-link4/my-link4.component';

const routes: Routes = [{
  path: 'feedback',
  component: FeedbackComponent
}, {
  path: 'mylink1',
  component: MyLink1Component
}, {
  path: 'mylink2',
  component: MyLink2Component
}, {
  path: 'mylink3',
  component: MyLink3Component
}, {
  path: 'mylink4',
  component: MyLink4Component
}, {
  path:'',
  redirectTo:'feedback', 
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
