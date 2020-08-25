import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckComponent } from './pages/deck/deck.component';
import { CardsResolver } from './resolvers/cards.resolver';
import { CardDetailsComponent } from './pages/card-details/card-details.component';


const routes: Routes = [
  { path: '', component: DeckComponent, resolve: { deck: CardsResolver } },
  { path: 'detalhes/:id/:name', component: CardDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
