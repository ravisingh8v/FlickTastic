import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from '../../service/overlay.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  styles: []
})
export class DetailsComponent implements OnInit {
  public getDetails: any;
  public Category: string;
  constructor(public overlay: OverlayService,
    private activatedRoute: ActivatedRoute,
    private route: Router) {
    this.Category = '';
  }

  ngOnInit(): void {
    console.log(this.getDetails);
    const routes = this.route.routerState.snapshot.url;
    if (routes == '/movie') {
      this.Category = 'Movie'
    } else if(routes=='/series'){
      this.Category = 'Web Series'
    }

  }

}
