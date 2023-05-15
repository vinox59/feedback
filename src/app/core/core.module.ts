import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Component list
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { NavigationComponent } from '../core/navigation/navigation.component'
const comp = [HeaderComponent, FooterComponent, NavigationComponent]
@NgModule({
  declarations: comp,
  exports: comp,
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class CoreModule { }
