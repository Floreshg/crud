import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  item:any ={
    name:""
  }
  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }


  addItem(){
    this.servicio.addItem(this.item);
    this.item.name = '';
  }

}
