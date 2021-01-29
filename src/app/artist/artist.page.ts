import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage {

  artistaEscolhido: any;

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.artistaEscolhido = getNav.extras.state.artista;
      }
    });
   }

  musicas: any = [
    {
      'name': 'All My Love',
      'icon': 'default-music', 
      'genre': 'R&B',
      'id': '50',
      'artist-id': '50'
    },
    {
      'name': 'Numb',
      'icon': 'default-music',
      'genre': 'Indie',
      'id': '51',
      'artist-id': '50'
    },
    {
      'name': 'Something About You',
      'icon': 'default-music',
      'genre': 'Pop',
      'id': '53',
      'artist-id': '50'
    },
    {
      'name': 'My House',
      'icon': 'default-music',
      'genre': 'Hip-Hop',
      'id': '43',
      'artist-id': '50'
    }
    ,
    {
      'name': 'Take a Minute',
      'icon': 'default-music',
      'genre': 'Pop',
      'id': '48',
      'artist-id': '50'
    },
    {
      'name': 'Reaching the Stars',
      'icon': 'default-music',
      'genre': 'Alternative',
      'id': '76',
      'artist-id': '50'
    }
  ];

  ionViewWillEnter(){
    console.log("Artista Escolhido: ", this.artistaEscolhido);
  }


  // voltar() {
  //   this.navCtrl.navigateBack('/home');
  // }

  abrirCifra(musica) {
    let navigationExtras: NavigationExtras = {
      state: {
        musica: musica
      }
    };
    this.router.navigate(['music-page'], navigationExtras);
  }

}
