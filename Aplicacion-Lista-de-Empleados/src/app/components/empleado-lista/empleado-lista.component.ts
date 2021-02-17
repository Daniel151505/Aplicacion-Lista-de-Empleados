import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.models';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {

  listaEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Marcos', apellido: 'Gozalez', sexo: 'Masculino', salario: 65000 },
    { legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 75000 },
    { legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 55000 },
    { legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'Femenino', salario: 80000 },
  ]

  radioButtonSeleccionado = 'Todos'
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listaEmpleados.length
  }

  obtenerTotalFemenino(): number{
    return this.listaEmpleados.filter( list => list.sexo === 'Femenino').length
  }

  obtenerTotalMasculino(): number{
    return this.listaEmpleados.filter( list => list.sexo === 'Masculino').length
  } 

  empleadoCountRadioButtonChange(radioButtonSelec : string): void{
    this.radioButtonSeleccionado = radioButtonSelec
  }

  }

