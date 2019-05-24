import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = environment.firebase;
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
    // AngularFirestoreModule, // imports firebase/firestore
    // AngularFireAuthModule, // imports firebase/auth
    // AngularFireStorageModule, // imports firebase/storage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
