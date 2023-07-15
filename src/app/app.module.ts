import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxPage } from './pages/sandbox/sandbox.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './lib/material.design.module';
import { ComponentsModule } from './components/components.module';
import {register} from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import { HomeModule } from './pages/home/home.module';


register();

@NgModule({
  declarations: [
    AppComponent,
    SandboxPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ComponentsModule,
    SwiperDirective,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
