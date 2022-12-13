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
import { TruncatePipe } from './shared/pipe/truncate.pipe';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './shared/service/overlay.service';


@NgModule({
  declarations: [
    AppComponent,
    TrendingMoviesComponent,
    TruncatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    OverlayModule
  ],
  providers: [MovieService,
  OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
