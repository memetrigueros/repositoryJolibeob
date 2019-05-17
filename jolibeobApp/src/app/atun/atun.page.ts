import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atun',
  templateUrl: './atun.page.html',
  styleUrls: ['./atun.page.scss'],
})
export class AtunPage implements OnInit {

  params:string;
  constructor(public navCtrl: NavController, private activeRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log("init bulgur")
    this.params = this.activeRoute.snapshot.paramMap.get('pre');
  }

  back(){
    console.log("params", this.params)
    this.navCtrl.navigateBack(this.params);

  }

}
