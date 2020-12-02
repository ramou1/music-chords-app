import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage {

  constructor(public navCtrl: NavController, private route: ActivatedRoute) { }

  artistaEscolhido = this.route.snapshot.paramMap.get('artista');
  // artistaEscolhido: any = this.navParams.get('artista');

  ionViewWillEnter(){
    console.log("Artista Escolhido: ", this.artistaEscolhido);
  }

  voltar() {
    this.navCtrl.navigateBack('/home');
  }

}
