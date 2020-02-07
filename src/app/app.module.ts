import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DEMOComponent } from './UI/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DEMOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DEMOComponent]
})
export class AppModule { }
