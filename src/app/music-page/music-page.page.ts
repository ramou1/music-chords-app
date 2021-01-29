import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.page.html',
  styleUrls: ['./music-page.page.scss'],
})
export class MusicPagePage implements OnInit {

  musicaEscolhida: any;
  rolagem_automatica_escolha: boolean = false;
  rolagem_automatica: any = "play-outline"

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

  rolagem() {
    this.rolagem_automatica_escolha = !this.rolagem_automatica_escolha;

    if(this.rolagem_automatica_escolha) {
      this.rolagem_automatica = "play-outline";
    } 
    else {
      this.rolagem_automatica = "stop-outline";
    }
    
  }

}
