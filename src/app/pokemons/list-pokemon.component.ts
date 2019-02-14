import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Router } from "@angular/router";
import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.css"]
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  color: string = "#99B92C";
  selectedPokemon: Pokemon;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }
  onSelect(pokemon: Pokemon): void {
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
