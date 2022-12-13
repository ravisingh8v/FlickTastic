import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    // TruncatePipe
    DetailsComponent
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[
    DetailsComponent
  ]
})
export class SharedModule { }
