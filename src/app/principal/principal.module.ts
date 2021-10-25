import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicaComponent } from './pages/publica/publica.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    PublicaComponent,
    AdminComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
