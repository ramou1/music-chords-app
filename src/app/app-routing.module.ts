import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'artist',
    loadChildren: () => import('./artist/artist.module').then( m => m.ArtistPageModule)
  },
  {
    path: 'music-page',
    loadChildren: () => import('./music-page/music-page.module').then( m => m.MusicPagePageModule)
  }

  // { path: 'artist/:id', loadChildren: './pages/product-detail/product-detail.module#ProductDetailModule' },
  // { path: 'artist/music-page', loadChildren: './pages/product-categories/product-categories.module#ProductCategoriesModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
