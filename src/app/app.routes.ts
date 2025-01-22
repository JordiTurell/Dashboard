import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VerticalComponent } from './layouts/vertical/vertical.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth-guard';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path: '', redirectTo:'/login', pathMatch:'full'},
    { path: "dashboard", canActivate: [AuthGuard], component: VerticalComponent, children:[
        { path: "home", component: HomeComponent },
    ]}
];
