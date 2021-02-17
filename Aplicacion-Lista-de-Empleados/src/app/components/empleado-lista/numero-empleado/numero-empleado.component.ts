import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-numero-empleado',
  templateUrl: './numero-empleado.component.html',
  styleUrls: ['./numero-empleado.component.css']
})
export class NumeroEmpleadoComponent implements OnInit {
  @Input() todos:number
  @Input() masculino:number
  @Input() femenino:number
  @Output() countRadioButtonChange = new EventEmitter<string>()

  radioButtonSeleccionado = 'Todos'

  constructor() { 
    this.todos = 0
    this.masculino = 0
    this.femenino = 0
  }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado)
  }

}
