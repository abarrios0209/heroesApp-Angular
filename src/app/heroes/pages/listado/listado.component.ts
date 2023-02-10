import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: any[] = [];
  termino: string  = '';
  heroeSeleccionado: any;
  
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    
    this.heroesService.getHeroesU()
      .subscribe( heroes => {
        console.log(heroes.data.results)
        this.heroes = heroes.data.results
      } );

  }

  buscando() {

    this.heroesService.getSugerenciasU(this.termino)
      .subscribe( heroes => {
        this.heroes = heroes.data.results
        console.log(heroes.data.results);

      } );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {
    console.log(event.option.value)
    sessionStorage.setItem('idHero',event.option.value)
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: any = event.option.value;
    console.log(heroe)
    this.termino = heroe.name;

    this.heroesService.getHeroePorIdU( heroe! )
      .subscribe( heroe => {
        this.heroes = heroe.data.results
        
        console.log(this.heroes)
      } );
  }

}
