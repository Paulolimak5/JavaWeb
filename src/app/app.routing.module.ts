import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sign-in/components/sing-in/sing-in.component';
import { SingUpComponent } from './sign-up/components/sing-up/sing-up.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'login',
      component: SingInComponent,
  },
  {
      path: 'register',
      component: SingUpComponent,
  },

];


@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
