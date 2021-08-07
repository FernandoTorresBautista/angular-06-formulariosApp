import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  persona = {
    genero: 'F', // defecto femenino
    notificaciones: true, // defecto si recibir not
  }

  terminosYCondiciones:boolean = false; 

}
