import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appPresupuestos';

  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio,
    private egresoServicio:EgresoServicio){
      this.ingresos = ingresoServicio.ingresos;
      this.egresos = egresoServicio.egresos;
    }

    getIngresoTotal(){
      let ingresoTotal:number=0;
      this.ingresos.forEach(ingreso=>{
        ingresoTotal += ingreso.valor;
      }
    );
    return ingresoTotal;
    }

    getEgresoTotal(){
      let egresoTotal:number=0;
      this.egresos.forEach(egreso=>{
        egresoTotal += egreso.valor;
      }
    );
    return egresoTotal;
    }

    getPorcentajeTotal(){
      return this.getEgresoTotal()/this.getIngresoTotal();
    }

    getPresupuestoTotal(){
      return this.getEgresoTotal() - this.getIngresoTotal();
    }

}
