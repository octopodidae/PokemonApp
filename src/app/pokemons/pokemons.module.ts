import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PokemonRoutingModule } from "./pokemons-routing.module";
import { PokemonsService } from "./pokemons.service";

import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonDetailComponent } from "./pokemon-detail.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonFormComponent } from "./pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon.component";

@NgModule({
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  declarations: [
    ListPokemonComponent,
    PokemonDetailComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}
