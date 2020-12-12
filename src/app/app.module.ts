import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';
import { UserModule } from './user/user.module';
import { CalendarModule } from './calendar/calendar.module';
import { BudgetingModule } from './budgeting/budgeting.module';
import { LinkModule } from './link/link.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CalendarModule,
    BudgetingModule,
    LinkModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
