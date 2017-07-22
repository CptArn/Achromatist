import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';

export const router: Routes = [
    { path: '', component: HomeComponent},
    { path: 'photography', component: PhotographyComponent},
    /* { path: '**', component: NotFoundComponent}, */

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: false});