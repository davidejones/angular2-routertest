import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./notfound.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
