import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [AppComponent, CardComponent, NavBottomComponent, DialogComponent, SafeHTMLPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
