import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarService } from './calendar.service';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { BudgetingService } from './budgeting.service';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CalendarComponent,
    BudgetingComponent,
    BudgetlistComponent,
    ShoppinglistComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CalendarService,
    BudgetingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
