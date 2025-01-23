import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VerticalComponent } from './layouts/vertical/vertical.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth-guard';
import { TablasComponent } from './pages/tablas/tablas.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path: '', redirectTo:'/login', pathMatch:'full'},
    { path: "dashboard", canActivate: [AuthGuard], component: VerticalComponent, children:[
        { path: "home", component: HomeComponent },
        { path: "tablas", component: TablasComponent },
        { path: "tareas", component: TareasComponent },
        { path: "calendario", component: CalendarioComponent },
    ]}
];
