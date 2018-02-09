import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'; 
import {RegistroPage} from '../registro/registro';
import {BuscadorPage} from '../buscador/buscador';  
import WooCommerceAPI from "woocommerce-api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wooapi:any;
  woodata:any;

  constructor(public navCtrl: NavController, //private facebook: Facebook-
  ) {

  } 

   login(){  
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

  GoRegistro():void{

    this.navCtrl.push(RegistroPage);



  }  
  GoBuscador():void{

    this.navCtrl.push(BuscadorPage);



  }

}


this.wooapi = new WooCommerceAPI(
  {
    url: 'http://proveedores.onlinewebshop.net', // Your store url (required)
    // version: 'v3', // WooCommerce API version (optional)
    // verifySsl: true, // Use `false` when need test with self-signed certificates, default is `true` (optional)
    // encoding: 'utf8', // Encode, default is 'utf8' (optional)
    consumerKey: 'ck_7016f9c77db048b7a00d42dd9b54cdf7879bae96', // Your API consumer key (required)
    consumerSecret: 'cs_4a73a7fc437c2211ff2f1003fe5db228da7a376a' // Your API consumer secret (required)
  }
);
// GET example
this.wooapi.get('customers', function(err, data, res) {
  console.log(res);
});

this.woodata = this.wooapi.get('products/category');
console.log(this.woodata);