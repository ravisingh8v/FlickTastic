import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../core/services/movie.service';
import { DetailsComponent } from '../shared/components/details/details.component';
import { CommunicationService } from '../shared/service/communication.service';
import { OverlayService } from '../shared/service/overlay.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
public allTrending:any[]=[];
public searchText:string;
  constructor(private activePage:CommunicationService,
    public trendingMovie:MovieService,
    private overlay:OverlayService,
  ) {
    this.searchText='';
     }

  ngOnInit(): void {
    this.activePage.activePage.next('search')
    this.getTrendingMovie()
  }
  onSearch(event:any){
    console.log(event); 
    this.searchText=event.target.value
    console.log(this.searchText);
    
  }
  getTrendingMovie() {
    this.trendingMovie.getTrendingMovie().subscribe((res: any) => {
      this.allTrending = res.results;
      console.log(this.allTrending);

    })
  }
  onDetails(id:number){
    const overlayref= this.overlay.openDialogue(DetailsComponent);
   overlayref.instance.getDetails=this.allTrending.filter((res)=>res.id == id);
   }
  
 
}
