import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@anonymouse/login/login.component';
import { AnonymouseComponent } from '@anonymouse/anonymouse.component';

const routes: Routes = [
  { path: '', component:AnonymouseComponent, children:[
    { path: 'login', component:LoginComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ]
})
export class AnonymouseModule { }
