import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './modules/bienvenidos/bienvenidos.component';
import { FarmaciaModule } from './modules/Farmacia/farmacia.module';
import { LoginComponent } from './modules/login/login.component';
import { RegistroUsuariosComponent } from './modules/registro-usuarios/registro-usuarios.component';

const routes: Routes = 
[
  { path: 'registrarusuario', component:  RegistroUsuariosComponent},
  { path: '', component:  LoginComponent},
  { path: 'bienvenidos', component:BienvenidosComponent  },
  {
    path: 'farmaceutica',
    loadChildren: () => import('./modules/Farmacia/farmacia.module').then(m => m.FarmaciaModule),
    data: {
      breadcrumbs: 'farmaceutica'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
