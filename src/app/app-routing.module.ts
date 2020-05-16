import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeFiltroComponent } from './components/heroe-filtro/heroe-filtro.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroe-filtro/:termino', component: HeroeFiltroComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
 imports: [RouterModule.forRoot(APP_ROUTES)],
 exports: [RouterModule]
 })
 export class AppRoutingModule { }
