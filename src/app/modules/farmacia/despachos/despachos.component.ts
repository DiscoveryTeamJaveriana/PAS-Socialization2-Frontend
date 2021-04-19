import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DespachosService } from 'src/app/shared/services/despachos/despachos.service';

@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  public lisDespachos : Array<any> = [];

  constructor(
    private toastr: ToastrService,
    private despachosService: DespachosService){}

  ngOnInit(): void {
    let perfil = localStorage.getItem("perfil");
    
    if(perfil == null)
    {
      document.location.href = '/';
    }else
    {
      this.getDespachos();
    }
  }

  getDespachos()
   {
     
    this.despachosService.DespachoCliente(Number(localStorage.getItem("id")),).subscribe((data: any) => {
      this.lisDespachos = data;
    });
  }

  DespachoCliente(data:any)
  {
      let desapacho = {
        idDespacho: data.id,
        aprobado: true
      }
       
      this.despachosService.DespachoClientePost(desapacho).subscribe((data: any) => {
        this.toastr.success('Proceso realziado exitosamente', 'Mensaje de notifcación!');
        this.getDespachos();
      });
  }
}
