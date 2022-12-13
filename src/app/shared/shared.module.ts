import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    DetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[
    DetailsComponent,
    TruncatePipe,
    FilterPipe
  ]
})
export class SharedModule { }
