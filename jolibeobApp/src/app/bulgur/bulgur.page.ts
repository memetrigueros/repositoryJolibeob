import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulgur',
  templateUrl: './bulgur.page.html',
  styleUrls: ['./bulgur.page.scss'],
})
export class BulgurPage implements OnInit {
  params:string;
  constructor(public navCtrl: NavController, private activeRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log("init bulgur")
    this.params = this.activeRoute.snapshot.paramMap.get('pre');
    console.log("params", this.params)
  }

  back(){
    console.log("params", this.params)
    this.navCtrl.navigateBack(this.params);

  }

}
