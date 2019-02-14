import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonDetailComponent } from "./pokemon-detail.component";
import { EditPokemonComponent } from "./edit-pokemon.component";

const pokemonsRoutes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/edit/:id", component: EditPokemonComponent },
  { path: "pokemon/:id", component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
