import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PokemonsModule } from "./pokemons/pokemons.module";

import { AppComponent } from "./app.component";

import { PageNotFoundComponent } from "./page-not-found.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, PokemonsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
