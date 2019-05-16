import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
import {  Events } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

email: string;
password: string;

  constructor(private authService: AuthService, public events: Events,
   private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'menu')
  }

  //   private formBuilder: FormBuilder,
    // private router: Router


ingresar(){
  this.authService.loginWithGoogle();
}

}
