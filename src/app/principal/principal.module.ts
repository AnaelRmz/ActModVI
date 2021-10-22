import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicaComponent } from './pages/publica/publica.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { PrincipalRoutingModule } from './principal-routing.module';



@NgModule({
  declarations: [
    PublicaComponent,
    AdminComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
