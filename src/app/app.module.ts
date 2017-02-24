import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { StorageDeviceAdminComponent } from './devices/storage-device-admin/storage-device-admin.component';
import { StorageDeviceViewComponent } from './devices/storage-device-view/storage-device-view.component';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
    declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    StorageDeviceAdminComponent,
    StorageDeviceViewComponent
  ],
  providers: [AuthGuard,
        AuthenticationService,
        UserService,
 
        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
