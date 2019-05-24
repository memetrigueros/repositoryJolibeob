import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MenuController } from '@ionic/angular';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  // tasksRef: AngularFireList<any>;
  // tasks: Observable<any[]>;
  pet:any;
  see = true;
  path = "/categoria"
  constructor(private menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menu')
  }

  ocultar(){
    console.log("click");
    this.see = false;
  }

  ngOnInit() {
  }

}
