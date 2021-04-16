import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuariosComponent } from './modules/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './modules/footer/footer.component';
import { BienvenidosComponent } from './modules/bienvenidos/bienvenidos.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuariosComponent,
    LoginComponent,
    FooterComponent,
    BienvenidosComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: "toast-bottom-full-width",
        preventDuplicates: true,
      },  
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
