import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from './home/home.component';
//import {StorageDeviceComponent} from './devices/storage-device.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';

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
    //StorageDeviceComponent
    AboutComponent,
    PageNotFoundComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
