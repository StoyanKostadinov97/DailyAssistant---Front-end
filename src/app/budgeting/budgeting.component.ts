import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Form, FormControlDirective, NgForm } from '@angular/forms';
import { BudgetingService } from '../budgeting.service';


@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.css']
})
export class BudgetingComponent implements OnInit, AfterViewInit {


  isClickedBudget: boolean;
  budgettingService: BudgetingService;

  isClickedShopping: boolean;


  constructor(budgettingService: BudgetingService) {
    this.budgettingService = budgettingService;
    this.isClickedBudget = false;
    this.isClickedShopping = false;

  }



  ngOnInit(): void {
    // console.log('Before');
    this.budgettingService.getBudgetArray();
    // console.log('After');
  }
  ngAfterViewInit(): void {
    // console.log("after init")
  }

  toggleInfoBudgeting(): void {
    this.isClickedBudget = !this.isClickedBudget;
  }

  toggleInfoShopping(): void {
    console.log('shoping clicked')
    this.isClickedShopping = !this.isClickedShopping;
  }

}
