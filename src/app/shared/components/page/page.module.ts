import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from 'src/app/app.routing.module';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    MainModule,
    FooterModule,
    HeaderModule,
    AppRoutingModule
  ],
  exports:[PageComponent]
})
export class PageModule { }
