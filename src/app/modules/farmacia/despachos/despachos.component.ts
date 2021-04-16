import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Mensaje de notifcación!');
  }

}
