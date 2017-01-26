import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StorageDeviceComponent} from './devices/storage-device.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { Logger } from 'angular2-logger/core';
const routes: Routes = [
  {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/*',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'storage-device',
        component: StorageDeviceComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);