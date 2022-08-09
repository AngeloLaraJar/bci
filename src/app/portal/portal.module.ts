import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnticiposComponent } from './pages/anticipos/anticipos.component';
import { MedioPagoComponent } from './pages/medio-pago/medio-pago.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { ComprobanteComponent } from './pages/comprobante/comprobante.component';



@NgModule({
  declarations: [
    AnticiposComponent,
    MedioPagoComponent,
    ConfirmacionComponent,
    ComprobanteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnticiposComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    MedioPagoComponent
  ]
})
export class PortalModule { }
