import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss']
})
export class BienvenidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let perfil = localStorage.getItem("perfil");

    if (perfil == null) {
      document.location.href = '/';
    }
  }

}
