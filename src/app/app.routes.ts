import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('@pages/layout')).routes,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
