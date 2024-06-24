import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

 @Input() presupuestoTotal:number | undefined;
 @Input() ingresoTotal:number | undefined;
 @Input() egresoTotal:number | undefined;
 @Input() porcentajeTotal:number | undefined;

 constructor(){}

}
