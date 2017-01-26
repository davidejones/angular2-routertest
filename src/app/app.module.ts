import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from "./notfound.component";
import { AppRouting } from "./app.routing";
import { HomeModule } from "./home/home.module";
import { TeamModule } from "./team/team.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    HomeModule,
    TeamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
