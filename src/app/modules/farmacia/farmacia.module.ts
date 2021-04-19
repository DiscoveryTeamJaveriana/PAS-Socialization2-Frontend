import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachosComponent } from './despachos/despachos.component';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';
import { HistoricosDespachosComponent } from './historicos-despachos/historicos-despachos.component';

@NgModule({
  declarations: [OrdenesCompraComponent,
    DespachosComponent,
    HistoricosDespachosComponent],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FarmaciaModule { }
