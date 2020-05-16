import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe-filtro',
  templateUrl: './heroe-filtro.component.html',
  styleUrls: ['./heroe-filtro.component.css']
})
export class HeroeFiltroComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    
   }

  ngOnInit(): void {

     this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
       this.heroes = this.heroeService.buscarHeroes(this.termino);
    })

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
