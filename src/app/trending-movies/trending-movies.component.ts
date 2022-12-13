import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { DetailsComponent } from '../shared/components/details/details.component';
import { OverlayService } from '../shared/service/overlay.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  public allTrending: any[] = [];
  public allGenre:any[]=[];
  constructor(private trendingMovie: MovieService,
    private overlay:OverlayService) { }

  ngOnInit(): void {
    this.getTrendingMovie()
  }
  getTrendingMovie() {
    this.trendingMovie.getLatestMovie().subscribe((res: any) => {
      this.allTrending = res.results;
      console.log(this.allTrending);

    })
  }
  onDetails(id:number){
   const overlayref= this.overlay.openDialogue(DetailsComponent);
  overlayref.instance.getDetails=this.allTrending.filter((res)=>res.id == id);
  }

}
