import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.page.html',
  styleUrls: ['./music-page.page.scss'],
})
export class MusicPagePage implements OnInit {

  musicaEscolhida: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.musicaEscolhida = getNav.extras.state.musica;
      }
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("Música Escolhida: ", this.musicaEscolhida);
  }

}
