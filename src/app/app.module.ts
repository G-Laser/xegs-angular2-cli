import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
import { ViewStorageDeviceComponent } from './devices/view-storage-device/view-storage-device.component';
import { EditStorageDeviceComponent } from './devices/edit-storage-device/edit-storage-device.component';

import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ArticleService } from './_services/index';
import { LoginComponent } from './login/index';
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import {ViewArticleComponent} from './article/view-article.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    ViewStorageDeviceComponent,
    EditStorageDeviceComponent,
    LoginComponent,
    ViewArticleComponent
  ],
  providers: [
        AuthGuard,
        AlertService,
        ArticleService,
        AuthenticationService,
        UserService,
        // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        BaseRequestOptions
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
