import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FutsalComponent } from './futsal/futsal.component';
import { HomeComponent } from './home/home.component';
import { MobileLegendsComponent } from './mobile-legends/mobile-legends.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [

  {path: 'Home', component: HomeComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'}, 
  {path: 'MobileLegends', component: MobileLegendsComponent},
  {path: 'Futsal', component: FutsalComponent},
  {path: 'Results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
