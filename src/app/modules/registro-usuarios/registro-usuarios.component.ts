import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr:ToastrService) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      inputIdentificacion: new FormControl("",Validators.required),
      inputNombres: new FormControl("",Validators.required),
      inputApellidos: new FormControl("",Validators.required),
      inputDireccion: new FormControl("",Validators.required),
      inputTelefono: new FormControl("",Validators.required),
      inputCiudad: new FormControl(""),
      inpuusuario: new FormControl("",Validators.required),
      inputPass1: new FormControl("",Validators.required),
      inputPass2: new FormControl("",Validators.required),
      inputCorreo: new FormControl(""),
    });

  }


  crearUsuarioSubmit()
  {
      
      if (this.formGroup.valid)
      {
        let usuario = 
        {
          apellidos: this.formGroup.value.inputApellidos,
          nombres: this.formGroup.value.inputNombres,
          correo: this.formGroup.value.inputCorreo,
          direccion: this.formGroup.value.inputDireccion + "" + this.formGroup.value.inputCiudad,
          id: 0,
          idRol: 0,
          nombreUsuario: this.formGroup.value.inpuusuario,
          telefono: this.formGroup.value.inputTelefono,
          contraseña: this.formGroup.value.inputPass1
        }
      }else
      {
        this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!');  
      }    
  }

}
