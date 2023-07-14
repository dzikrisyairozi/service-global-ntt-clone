import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxPage } from './pages/sandbox/sandbox.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './lib/material.design.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePage } from './pages/home/home.page';
import { TypographyComponent } from './components/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxPage,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomePage,
    TypographyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
