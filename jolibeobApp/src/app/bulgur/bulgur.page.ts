import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bulgur',
  templateUrl: './bulgur.page.html',
  styleUrls: ['./bulgur.page.scss'],
})
export class BulgurPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('/busqueda-personalizada');
  }

}
