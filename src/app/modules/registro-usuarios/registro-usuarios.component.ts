import { Component, destroyPlatform, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr:ToastrService,
              private usuariosService:UsuariosService) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      inputIdentificacion: new FormControl("",Validators.required),
      inputNombres: new FormControl("",Validators.required),
      inputApellidos: new FormControl("",Validators.required),
      inputDireccion: new FormControl("",Validators.required),
      inputTelefono: new FormControl("",Validators.required),
      inputCiudad: new FormControl(""),
      inpuRolUsuario: new FormControl("",Validators.required),
      inputPass1: new FormControl("",Validators.required),
      inputPass2: new FormControl("",Validators.required),
      inputCorreo: new FormControl(""),
      inputNombreusuario: new FormControl("",Validators.required),
    });

  }


  crearUsuarioSubmit()
  {
    console.log(this.formGroup.valid);
      if (this.formGroup.valid)
      {
        let usuario = 
        {
          apellidos: this.formGroup.value.inputApellidos,
          nombres: this.formGroup.value.inputNombres,
          correo: this.formGroup.value.inputCorreo,
          direccion: this.formGroup.value.inputDireccion + "" + this.formGroup.value.inputCiudad,
          id: Number(this.formGroup.value.inputIdentificacion),
          idRol: Number(this.formGroup.value.inpuRolUsuario),
          nombreUsuario: this.formGroup.value.inputNombreusuario,
          telefono: this.formGroup.value.inputTelefono,
          contraseña: this.formGroup.value.inputPass1
        }
        
        this.usuariosService.CreateUser(usuario).subscribe((data: any) =>
         {
        
          this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');
        });
        
      }else
      {
        this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!');  
      }    
  }

}
