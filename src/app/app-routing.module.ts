import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ViewStorageDeviceComponent} from './devices/view-storage-device/view-storage-device.component';
import {EditStorageDeviceComponent} from './devices/edit-storage-device/edit-storage-device.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import { Logger } from 'angular2-logger/core';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'storagesolutions',
        component: ViewStorageDeviceComponent
    },
    {
        path: 'storagesolutionsadmim',
        component: EditStorageDeviceComponent
        , canActivate: [AuthGuard]
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
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
