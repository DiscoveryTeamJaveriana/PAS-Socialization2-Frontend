import { Component, OnInit } from '@angular/core';
import { DespachosService } from 'src/app/shared/services/despachos/despachos.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.scss']
})
export class OrdenesCompraComponent implements OnInit {

  public formGroup: FormGroup;
  public idespacho : number;

  constructor(private despachosService: DespachosService,
    private formBuilder: FormBuilder,
    private toastr:ToastrService) { }
    
   public lisDespachos : Array<any> = [];

  ngOnInit(): void 
  {
    let perfil = localStorage.getItem("perfil");
    
    if(perfil == null)
    {
      document.location.href = '/';
    }else
    {
      this.DespachoProveedor();
    }

    this.formGroup = this.formBuilder.group({
      inputOferta: new FormControl("",Validators.required),
    });
  }

  DespachoProveedor()
  {
    this.despachosService.GetAll().subscribe((data: any) => 
    {
      this.lisDespachos = data;
    });
  }

  setOferta(informacion:any)
  {
    this.idespacho = informacion.id;
  }

  enviarOferta()
  {
    let oferta =
    {
      idUsuarioTransporte: Number(localStorage.getItem("id")),
      oferta: this.formGroup.value.inputOferta
    }

    this.despachosService.DespachoProveedor(this.idespacho,oferta).subscribe((data: any) => 
    {
      this.toastr.success('Proceso realziado exitosamente', 'Mensaje de notifcación!');
      this.DespachoProveedor();
    });
  }
}
