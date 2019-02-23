import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ResultsactivateService, HomeActivate } from './resultsactivate.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeActivate],
    component: HomeComponent
  },
  {
    path: 'search',
    canActivate: [ResultsactivateService],
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
