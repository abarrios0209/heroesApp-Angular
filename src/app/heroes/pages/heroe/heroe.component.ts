import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: any;
  comics:any = [];
  stories:any = [];
  imagen:any = [];

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorIdU(id) )
      )
      .subscribe( heroe => {
        console.log(heroe)
        this.heroe = heroe
        heroe.data.results[0].comics.items.map((res:any) => {
          this.comics.push(res.name);
          this.heroesService.getComicsData(res.resourceURI).subscribe(comicData => {
            this.imagen.push(comicData.data.results[0]);
            console.log('comics',`${comicData.data.results[0].thumbnail.path}.jpg`);
            console.log(this.imagen)

          })
        })
        console.log(this.comics)
        heroe.data.results[0].stories.items.map((res:any) => {
          this.stories.push(res.name);
          console.log(res.name)
        })
        console.log(this.stories)

      } );

  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
