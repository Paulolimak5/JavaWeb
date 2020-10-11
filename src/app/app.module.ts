import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavBarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
