import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'calendar',
    component:CalendarComponent
  },
  {
    path:'budget',
    component:BudgetingComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
