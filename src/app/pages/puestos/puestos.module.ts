import { VendedoresComponent } from './../../components/categorias/vendedores/vendedores.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuestosPageRoutingModule } from './puestos-routing.module';

import { PuestosPage } from './puestos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuestosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PuestosPage]
})
export class PuestosPageModule {}
