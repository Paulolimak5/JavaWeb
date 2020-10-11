import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigInComponent } from './components/sig-in/sig-in.component';
import { SigUpComponent } from './components/sig-up/sig-up.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [SigInComponent, SigUpComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
