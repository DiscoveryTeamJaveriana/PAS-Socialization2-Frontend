import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class DespachosService {

  constructor(private http: HttpClient,
    private api: Api) {
  }
  
   GetAll()
   {
    return this.api.get("DespachoProveedor");
   }

   DespachoProveedor(id: any,objeto:any)
   {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("DespachoProveedor/" +id,objeto, { headers: headers });
   }

   DespachoCliente(idUsuarioDestino:any)
   {
    return this.api.get('DespachoCliente/' +idUsuarioDestino);
   }

   DespachoClientePost(despacho: any)
   {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("DespachoCliente",despacho,  { headers: headers });
   }
   
   DespachoClienteHistorico(id:any)
   {
    return this.api.get('DespachoClienteHistorico/' +id);
   }
}
