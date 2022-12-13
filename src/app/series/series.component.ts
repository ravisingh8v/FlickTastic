import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { DetailsComponent } from '../shared/components/details/details.component';
import { CommunicationService } from '../shared/service/communication.service';
import { OverlayService } from '../shared/service/overlay.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
public allSeries:any[]=[];
  constructor(private activePage:CommunicationService,
    private getSeries:MovieService,
    private overlay:OverlayService) { }

  ngOnInit(): void {
    this.activePage.activePage.next('series');
    this.getAllSeries()
  }
  getAllSeries(){
    this.getSeries.getAllSeries().subscribe((res:any)=>{
      this.allSeries=res.results
      console.log(this.allSeries);
  })
}
onDetails(id:number){
  const overlayref= this.overlay.openDialogue(DetailsComponent);
 overlayref.instance.getDetails=this.allSeries.filter((res)=>res.id == id);
 }
}
