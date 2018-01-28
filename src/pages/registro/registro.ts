import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'; 

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginFacebook(){  
    //this.facebook.login(["email"]).then((loginResponse) => {
     // let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
    //  firebase.auth().signInWithCredential(credential).then((info) => {
     //   alert(JSON.stringify(info));
     // })
    //})
    let provider =  new firebase.auth.FacebookAuthProvider();
    
        firebase.auth().signInWithRedirect(provider).then(()=>{
          firebase.auth().getRedirectResult().then((result)=>{
            alert(JSON.stringify(result));
          }).catch(function(error){
            alert(JSON.stringify(error))
          });
    
        })
    

  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
