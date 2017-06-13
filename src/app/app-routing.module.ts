import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StorageDeviceViewComponent} from './devices/storage-device-view/storage-device-view.component';
import {StorageDeviceAdminComponent} from './devices/storage-device-admin/storage-device-admin.component';
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
        component: StorageDeviceViewComponent
    },
    {
        path: 'storagesolutionsadmim',
        component: StorageDeviceAdminComponent
        //,canActivate: [AuthGuard]
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