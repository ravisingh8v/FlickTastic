import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../service/overlay.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  styles:[]
})
export class DetailsComponent implements OnInit {
public getDetails:any;
  constructor(public overlay:OverlayService) { }

  ngOnInit(): void {
    console.log(this.getDetails);
    
  }

}
