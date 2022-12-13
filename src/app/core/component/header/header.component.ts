import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public home:boolean=false;
public movie:boolean;
public series:boolean;

  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router
    ) {
    // this.home=false;
    this.movie=false;
    this.series=false;
   }

  ngOnInit(): void {
    
  }
  
  
  // navigating 
  navigateHome(){
   
    
  }
  navigateMovie(){
  this.router.navigate(['movie'])

}
navigateSeries(){
  this.router.navigate(['series'])
}
}
