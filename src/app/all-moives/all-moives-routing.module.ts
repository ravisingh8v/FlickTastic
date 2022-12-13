import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoivesComponent } from './all-moives.component';

const routes: Routes = [{ path: '', component: AllMoivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMoivesRoutingModule { }
