import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscador',
  templateUrl: 'buscador.html',
})
export class BuscadorPage {

  searchQuery: string = '';
  items: string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
   
  }
  initializeItems() {
    this.items = [
      'Arroz',
      'Huevos',
      'Frijoles',
      'Lentejas',
      'Azucar',
      'Sal',
      'Arroz Diana X1TON',
      'Aceite Girasol X10LTS',
      'Cereal X24',
      'Lomito de Atún en aceite Pack X100',
  ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorPage');
  }

}
