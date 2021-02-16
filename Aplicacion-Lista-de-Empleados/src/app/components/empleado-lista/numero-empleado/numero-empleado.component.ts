import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-empleado',
  templateUrl: './numero-empleado.component.html',
  styleUrls: ['./numero-empleado.component.css']
})
export class NumeroEmpleadoComponent implements OnInit {

  
  radioButtonSeleccionado = 'Todos'

  constructor() { }

  ngOnInit(): void {
  }

}
