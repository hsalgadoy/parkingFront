import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryvehicleComponent } from './entryvehicle/entryvehicle.component';
import { ListparkingComponent } from './listparking/listparking.component';
import { OutvehicleComponent } from './outvehicle/outvehicle.component';

const routes: Routes = [

{path: 'entry', component: EntryvehicleComponent},
{path: 'list', component: ListparkingComponent},
{path: 'out/:id', component: OutvehicleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
