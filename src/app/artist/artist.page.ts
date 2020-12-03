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

  musicas: any = [
    {
      'name': 'All My Love',
      'icon': 'default-music', 
      'genre': 'R&B',
      'id': '50'
    },
    {
      'name': 'Numb',
      'icon': 'default-music',
      'genre': 'Indie',
      'id': '51'
    },
    {
      'name': 'Something About You',
      'icon': 'default-music',
      'genre': 'Pop',
      'id': '53'
    },
    {
      'name': 'My House',
      'icon': 'default-music',
      'genre': 'Hip-Hop',
      'id': '43'
    }
    ,
    {
      'name': 'Take a Minute',
      'icon': 'default-music',
      'genre': 'Pop',
      'id': '48'
    },
    {
      'name': 'Reaching the Stars',
      'icon': 'default-music',
      'genre': 'Alternative',
      'id': '76'
    }
  ];

  ionViewWillEnter(){
    console.log("Artista Escolhido: ", this.artistaEscolhido);
  }

  voltar() {
    this.navCtrl.navigateBack('/home');
  }

  abrirLetra(musica) {
    console.log("Abrir letra: ", musica);
  }

}
