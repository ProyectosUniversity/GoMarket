import { ListaDeComprasComponent } from './reservas/lista-de-compras/lista-de-compras.component';
import { VendedoresComponent } from './categorias/vendedores/vendedores.component';
import { ProductosComponent } from './categorias/productos/productos.component';
import { InicioComponent } from './categorias/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    ProductosComponent,
    VendedoresComponent,
    ListaDeComprasComponent
  ],
  exports:[
    MenuComponent,
    InicioComponent,
    ProductosComponent,
    VendedoresComponent,
    ListaDeComprasComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
