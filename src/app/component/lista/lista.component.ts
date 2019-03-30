import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  datos:any;

  editarItem: any ={
    name: ''
  }
  constructor(private conexion:ConexionService) { 

    this.conexion.listaItem().subscribe(dato =>{
      this.datos = dato;
      console.log(this.datos);
      
    })
  }

  ngOnInit() {
  }

  deleteItem(dato){
    this.conexion.deleteItem(dato)

  }

  editItem(dato){
    this.editarItem = dato;
  }

  addItemEdit(){
    this.conexion.editItem(this.editarItem)
  }

}
