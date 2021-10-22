import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicaComponent } from './pages/publica/publica.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'publica', component: PublicaComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'usuario', component: UsuarioComponent },
      {path: '**', redirectTo: 'publica'}
    ]
  }
]


@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild( routes ),
    CommonModule
  ]
})
export class PrincipalRoutingModule { }
