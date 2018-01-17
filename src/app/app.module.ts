/**
 * Angular Import
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 * Modules Import
 */

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { TaskboardModule } from './taskboard/taskboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Components Import
 */

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    TaskboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
