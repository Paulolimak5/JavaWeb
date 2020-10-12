import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
