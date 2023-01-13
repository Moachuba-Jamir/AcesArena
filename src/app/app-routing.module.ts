import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FutsalComponent } from './futsal/futsal.component';
import { MobileLegendsComponent } from './mobile-legends/mobile-legends.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, 
  {path: 'Home', component: AppComponent},
  {path: 'MobileLegends', component: MobileLegendsComponent},
  {path: 'Futsal', component: FutsalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
