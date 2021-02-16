import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-empleado',
  templateUrl: './numero-empleado.component.html',
  styleUrls: ['./numero-empleado.component.css']
})
export class NumeroEmpleadoComponent implements OnInit {
  @Input() todos:number
  @Input() masculino:number
  @Input() femenino:number
   
  radioButtonSeleccionado = 'Todos'

  constructor() { 
    this.todos = 0
    this.masculino = 0
    this.femenino = 0
  }

  ngOnInit(): void {
  }

}
