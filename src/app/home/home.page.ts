import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ArtistPage } from '../artist/artist.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, private router: Router) {
  }

  listaFiltrada: any[];
  listaArtistas: any = [
    {
      'name': 'Khalid',
      'icon': 'khalid', 
      'genre': 'R&B',
      'id': '50'
    },
    {
      'name': 'Lana del Rey',
      'icon': 'default',
      'genre': 'Indie',
      'id': '51'
    },
    {
      'name': 'Ariana Grande',
      'icon': 'ariana-grande',
      'genre': 'Pop',
      'id': '53'
    },
    {
      'name': 'Brockhampton',
      'icon': 'default',
      'genre': 'Hip-Hop',
      'id': '43'
    }
    ,
    {
      'name': 'Harry Styles',
      'icon': 'default',
      'genre': 'Pop',
      'id': '48'
    },
    {
      'name': 'John Frusciante',
      'icon': 'default',
      'genre': 'Alternative',
      'id': '76'
    }
  ];

  ionViewDidEnter() {
    this.loadData();
    this.listaFiltrada = this.listaArtistas;
  }

  // ionViewDidLoad() {
  // }

  loadData() {
    console.log("Artistas: ", this.listaArtistas);
  }


  abrirArtista(artista) {
    this.router.navigate(['/artist', { artista: artista }]);
    // this.navCtrl.navigateForward(['/artist', { artista: artista }]);   
  }

  filtrar(pesquisa) {
    this.listaFiltrada = this.listaArtistas.filter(artista => {
        return (artista.name.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1);
    });
  }
}
