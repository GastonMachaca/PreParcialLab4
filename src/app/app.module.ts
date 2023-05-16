import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { provideStorage } from '@angular/fire/storage';
import { getStorage } from 'firebase/storage';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    BusquedaComponent,
    DetallePeliculaComponent,
    // TablaActorComponent,
    // TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
