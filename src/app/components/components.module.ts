import { CategoriasComponent } from './categorias/categorias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CategoriasComponent
  ],
  exports:[
    CategoriasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
