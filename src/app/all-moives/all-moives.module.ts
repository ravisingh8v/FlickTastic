import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoivesRoutingModule } from './all-moives-routing.module';
import { AllMoivesComponent } from './all-moives.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllMoivesComponent,
  ],
  imports: [
    CommonModule,
    AllMoivesRoutingModule,
    SharedModule
  ],providers:[]
})
export class AllMoivesModule { }
