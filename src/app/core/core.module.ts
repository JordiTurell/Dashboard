import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from '@core/core.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/home/home.component';
import { AuthGuard } from '@infrastructure/guard/auth-guard';

const routes : Routes = [
  { path: '', component:CoreComponent, children:[
      { path: 'home', component:HomeComponent},
      // { path: 'tipos', loadChildren: () => import('@core/tipos/tipos.module').then(m => m.TiposModule) },
      // { path: 'categorias', loadChildren: () => import('@core/categorias/categorias.module').then(m => m.CategoriasModule) },
      // { path: 'iconos', loadChildren: () => import('@core/iconos/iconos.module').then(m => m.IconosModule) },
      // { path: 'links', loadChildren: () => import('@core/links/links.module').then(m => m.LinksModule) },
      // { path: 'personajes', loadChildren: () => import('@core/personajes/personajes.module').then(m => m.PersonajesModule) },
      // { path: 'superatacks', loadChildren: () => import('@core/superatacks/superatacks.module').then(m => m.SuperatacksModule) },
    ], canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
