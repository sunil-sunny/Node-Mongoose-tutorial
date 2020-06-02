import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';


const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'movie/:id', component: MoviedetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
