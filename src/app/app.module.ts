import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbMenuService } from '@nebular/theme';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbSidebarModule,
    ButtonsModule,
    GridModule,
    NbMenuModule
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
    NbMenuInternalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
