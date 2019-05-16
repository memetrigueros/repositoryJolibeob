import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentChanged(ev: any) {
     console.log('Segment changed', ev);

   }

   constructor(private menuCtrl: MenuController) {
     this.menuCtrl.enable(true, 'menu')
   }

}
