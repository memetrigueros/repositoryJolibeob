import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from  'firebase';
import { auth } from  'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(
    public afAuth: AngularFireAuth, public  router:  Router, public navCtrl: NavController
  ){
    this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      })

  }

  login(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res =>{
      console.log(res);
    }).catch(err => console.log(err));
  }

  async  loginWithGoogle(){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res =>{
        console.log(res);
        this.navCtrl.navigateBack('/pantalla-primera-vez');
      }).catch(err => console.log(err));

}

// logout(){
//   // this.afAuth.signOut();
// }
//
//   doRegister(value){
//    return new Promise<any>((resolve, reject) => {
//      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
//      .then(
//        res => resolve(res),
//        err => reject(err))
//    })
//   }
//
//   doLogin(value){
//    return new Promise<any>((resolve, reject) => {
//      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
//      .then(
//        res => resolve(res),
//        err => reject(err))
//    })
//   }
//
//   doLogout(){
//     return new Promise((resolve, reject) => {
//       this.afAuth.auth.signOut()
//       .then(() => {
//         this.firebaseService.unsubscribeOnLogOut();
//         resolve();
//       }).catch((error) => {
//         console.log(error);
//         reject();
//       });
//     })
//   }
}
