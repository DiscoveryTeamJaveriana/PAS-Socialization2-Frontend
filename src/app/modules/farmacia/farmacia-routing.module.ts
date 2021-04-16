import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespachosComponent } from './despachos/despachos.component';
import { HistoricosDespachosComponent } from './historicos-despachos/historicos-despachos.component';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';

const routes: Routes = 
[
  { path: 'despachos', component:  DespachosComponent},
  { path: 'historial-despachos', component:  HistoricosDespachosComponent},
  { path: 'ordenes-compra', component:  OrdenesCompraComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
