import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alga',
  templateUrl: './alga.page.html',
  styleUrls: ['./alga.page.scss'],
})
export class AlgaPage implements OnInit {

  params:string;
  constructor(public navCtrl: NavController, private activeRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.params = this.activeRoute.snapshot.paramMap.get('pre');
  }

  back(){
    console.log("params", this.params)
    this.navCtrl.navigateBack(this.params);

  }

}
