import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { MovieService } from './core/services/movie.service';
import { SharedModule } from './shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './shared/service/overlay.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TrendingMoviesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    OverlayModule,
    FormsModule
  ],
  providers: [MovieService,
  OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
