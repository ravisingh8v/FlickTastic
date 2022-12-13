import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { DetailsComponent } from '../shared/components/details/details.component';
import { CommunicationService } from '../shared/service/communication.service';
import { OverlayService } from '../shared/service/overlay.service';

@Component({
  selector: 'app-all-moives',
  templateUrl: './all-moives.component.html',
  styleUrls: ['./all-moives.component.scss']
})
export class AllMoivesComponent implements OnInit {
public allMovie:any[]=[];
  constructor(private getMovie:MovieService,
    public activePage:CommunicationService,
    private overlay:OverlayService) { }

  ngOnInit(): void {
    this.getAllMovie()
    this.activePage.activePage.next('movie')

  }
  getAllMovie(){
    this.getMovie.getAllMovie().subscribe((res:any)=>{
      this.allMovie=res.results
      console.log(this.allMovie);
  })
}
onDetails(id:number){
  const overlayref= this.overlay.openDialogue(DetailsComponent);
 overlayref.instance.getDetails=this.allMovie.filter((res)=>res.id == id);
 }
}
