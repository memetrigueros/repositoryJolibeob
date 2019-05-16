import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pantalla-primera-vez',
  templateUrl: './pantalla-primera-vez.page.html',
  styleUrls: ['./pantalla-primera-vez.page.scss'],
})
export class PantallaPrimeraVezPage implements OnInit {

  constructor(private menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menu')
  }

  ngOnInit() {
  }

}
