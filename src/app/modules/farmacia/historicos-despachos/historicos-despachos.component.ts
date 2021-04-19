import { Component, OnInit } from '@angular/core';
import { DespachosService } from 'src/app/shared/services/despachos/despachos.service';


@Component({
  selector: 'app-historicos-despachos',
  templateUrl: './historicos-despachos.component.html',
  styleUrls: ['./historicos-despachos.component.scss']
})
export class HistoricosDespachosComponent implements OnInit {

  public lisDespachos :[any];

  constructor(private despachosService :DespachosService) { }

  ngOnInit(): void
  {
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
    
   this.despachosService.DespachoClienteHistorico(Number(localStorage.getItem("id")),).subscribe((data: any) => {
     this.lisDespachos = data;
     console.log(this.lisDespachos)
   });
 }

 

}
