import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderTwoComponent } from './shared/header-two/header-two.component';
import { HeaderOneComponent } from './shared/header-one/header-one.component';
import { CardItemComponent } from './component/card/card-item/card-item.component';
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';


import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItenTwoComponent } from './component/card/card-iten-two/card-iten-two.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    CardItemComponent,
    FooterComponent,
    CardItenTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
