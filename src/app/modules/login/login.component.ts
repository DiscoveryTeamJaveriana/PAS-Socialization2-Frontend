import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr:ToastrService,
              private usuariosService: UsuariosService) { }

  ngOnInit(): void 
  {
    this.formGroup = this.formBuilder.group({
      inputUsuario: new FormControl("",Validators.required),
      inputPassword: new FormControl("",Validators.required)
    });

    localStorage.removeItem("perfil");
  }

  iniciarSesion()
  {
    

    if(this.formGroup.valid)
    {
      let  usuario = 
      {
        usuario:this.formGroup.value.inputUsuario,
        password:this.formGroup.value.inputPassword
      };


    this.usuariosService.GetUser(this.formGroup.value.inputUsuario).subscribe((data: any) => 
    {
      if(data.apellidos !=null)
      {
         if(data.contraseña == this.formGroup.value.inputPassword)
         {
           this.setRolStorege(data.idRol);
           localStorage.setItem("id",data.id);
          document.location.href = '/bienvenidos';
         }else
         {
          this.toastr.warning('por favor valide la informacion suministrada', 'Mensaje de notifcación!');      
         }
      }else 
      {
        this.toastr.warning('por favor valide la informacion suministrada', 'Mensaje de notifcación!');      
      }
    });
    }else
    {
      this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!');      
    }
  }

  setRolStorege(id :any)
  {
    switch(id) { 
      case 2: { 
        localStorage.setItem("perfil","cliente");
         break; 
      } 
      case 3: { 
        localStorage.setItem("perfil","proveedor");
         break; 
      } 
      default: { 
        localStorage.setItem("perfil","admin");
         break; 
      } 
   } 
  }
}
