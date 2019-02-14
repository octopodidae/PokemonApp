import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "./pokemons/pokemon";
import { POKEMONS } from "./pokemons/mock-pokemons";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "pokemon-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Pokemon App";

  //@Input() pok: Pokemon;
}
