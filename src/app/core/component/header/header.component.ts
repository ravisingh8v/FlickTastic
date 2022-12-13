import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from 'src/app/shared/service/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public home: boolean;
  public movie: boolean;
  public series: boolean;
  public search: boolean;


  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private activePage: CommunicationService
  ) {
    this.home = false;
    this.movie = false;
    this.series = false;
    this.search = false;
  }

  ngOnInit(): void {
    this.activeLink()

  }


  // navigating 
  navigateHome() {
    this.activeLink()


  }
  navigateMovie() {
    this.router.navigate(['movie'])
    this.activeLink()

  }
  navigateSeries() {
    this.router.navigate(['series']);
    this.activeLink()

  }
  activeLink() {
    this.activePage.activePage.subscribe((res) => {
      
      if (res == 'trending') {
        this.home = true;
        this.movie = false;
        this.series = false;
        this.search = false;
      }
      else if (res == 'search') {
        this.home = false;
        this.movie = false;
        this.series = false;
        this.search = true;

      } else if (res == 'movie') {
        this.home = false;
        this.movie = true;
        this.series = false;
        this.search = false;

      } else if (res = 'series') {
        this.home = false;
        this.movie = false;
        this.series = true;
        this.search = false;

      }
    })
  }

}
