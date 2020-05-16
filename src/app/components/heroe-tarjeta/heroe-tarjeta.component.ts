import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: '', };

    @Input() i: number;

    // @Output() heroeSeleccionado: EventEmitter<number>
  constructor(private router: Router) { 
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

   verHeroe() {
     this.router.navigate(['/heroe', this.i]);
   }

}
