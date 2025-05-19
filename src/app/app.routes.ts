import { Routes } from '@angular/router';


export const routes: Routes = [
     // Core routes
    { path: '', loadChildren: () => import('@core/core.module').then(m => m.CoreModule) },
    
    // Anonymous routes
    { path: 'login', loadChildren: () => import('@anonymouse/anonymouse.module').then(m => m.AnonymouseModule) },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
