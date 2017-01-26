import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home.routes";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [

  ]
})
export class HomeModule {
}
