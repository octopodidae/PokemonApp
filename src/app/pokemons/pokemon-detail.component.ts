import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Pokemon } from "./pokemon";
import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService;
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(["/pokemons"]);
  }

  goEdit(pokemon: Pokemon){
    let link = ["/pokemon/edit", pokemon.id];
    this.router.navigate(link);
  }
}
