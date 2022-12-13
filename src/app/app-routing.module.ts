import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'trending'},
  {path:'trending',component:TrendingMoviesComponent},
  { path: 'movie', loadChildren: () => import('./all-moives/all-moives.module').then(m => m.AllMoivesModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
