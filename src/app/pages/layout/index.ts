import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'compose',
        pathMatch: 'full',
    },
    {
        path: 'compose',
        title: 'composer',
        loadChildren: async () => (await import('@pages/compose')).routes,
        canActivate: [AuthGuard],
    },
];
