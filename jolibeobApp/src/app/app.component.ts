import { Component } from '@angular/core';

import { Firebase } from '@ionic-native/firebase';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Categoria',
      url: '/categoria',
      icon: 'ios-apps'
    },
    {
      title: 'Busqueda Personalizada',
      url: '/busqueda-personalizada',
      icon: 'person'
    },
    {
      title: 'Cerrar Sesión',
      url: '/login',
      icon: 'lock'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
