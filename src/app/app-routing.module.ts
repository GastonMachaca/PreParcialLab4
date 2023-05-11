import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [

  { path : '', redirectTo: 'bienvenido', pathMatch:'full' },
  { path : 'bienvenido',component : BienvenidoComponent },
  { path : 'busqueda',component : BusquedaComponent },
  { path : 'peliculas', loadChildren: () => import('./pages/pelicula/pelicula.module').then(m => m.PeliculaModule) },
  { path: 'actor', loadChildren: () => import('./pages/actor/actor.module').then(m => m.ActorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
