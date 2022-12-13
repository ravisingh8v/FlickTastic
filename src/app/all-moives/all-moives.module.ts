import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoivesRoutingModule } from './all-moives-routing.module';
import { AllMoivesComponent } from './all-moives.component';


@NgModule({
  declarations: [
    AllMoivesComponent
  ],
  imports: [
    CommonModule,
    AllMoivesRoutingModule
  ]
})
export class AllMoivesModule { }
