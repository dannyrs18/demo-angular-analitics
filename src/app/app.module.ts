/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { NebulaModule } from './nebula.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NebulaModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('G-17TQTS07G0')
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
