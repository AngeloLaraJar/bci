import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnticiposComponent } from './portal/pages/anticipos/anticipos.component';
import { ComprobanteComponent } from './portal/pages/comprobante/comprobante.component';
import { ConfirmacionComponent } from './portal/pages/confirmacion/confirmacion.component';
import { MedioPagoComponent } from './portal/pages/medio-pago/medio-pago.component';

const routes: Routes = [
  {
    path: '',
    component: AnticiposComponent,
    pathMatch: 'full'
  },
  {
    path:'medio-pago',
    component: MedioPagoComponent
  },
  {
    path:'confirmacion',
    component: ConfirmacionComponent
  },
  {
    path: 'comprobante',
    component: ComprobanteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
