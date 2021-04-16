import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      inputIdentificacion: new FormControl("",Validators.required),
      inputNombres: new FormControl("",Validators.required),
      inputApellidos: new FormControl("",Validators.required),
      inputDireccion: new FormControl("",Validators.required),
      inputTelefono: new FormControl("",Validators.required),
      inputCiudad: new FormControl("",Validators.required),
      inpuusuario: new FormControl("",Validators.required),
      inputPass1: new FormControl(""),
    });

  }

}
