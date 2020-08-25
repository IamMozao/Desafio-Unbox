import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { CardComponent } from './components/card/card.component';
import { DeckComponent } from './pages/deck/deck.component';
import { CardsResolver } from './resolvers/cards.resolver';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    CardComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CardsResolver, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
