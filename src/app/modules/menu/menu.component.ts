import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public isAutenticado:boolean = false;
  public perfil : string;
  constructor() { }

  ngOnInit(): void 
  {
    this.perfil = localStorage.getItem("perfil");
    console.log(this.perfil);
    if(this.perfil != null)
    {
      this.isAutenticado = true;
    }

    console.log(this.isAutenticado)
  }

  cerrarSesion()
  {
    localStorage.removeItem("perfil");
  }

}
