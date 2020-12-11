import { Component} from '@angular/core';
import { BudgetingService } from '../budgeting.service';


@Component({
  selector: 'app-budgeting',
  templateUrl: './budgeting.component.html',
  styleUrls: ['./budgeting.component.css']
})
export class BudgetingComponent {


  isClickedBudget: boolean;
  budgettingService: BudgetingService;

  isClickedShopping: boolean;


  constructor(budgettingService: BudgetingService) {
    this.budgettingService = budgettingService;
    this.isClickedBudget = false;
    this.isClickedShopping = false;

  }

  toggleInfoBudgeting(): void {

    this.isClickedBudget = !this.isClickedBudget;

    if(this.isClickedBudget){
      this.budgettingService.getBudgetArray().subscribe();
    }
  }

  toggleInfoShopping(): void {

    this.isClickedShopping = !this.isClickedShopping;
    if(this.isClickedShopping){
      this.budgettingService.getShoppingArray().subscribe();
    }

  }

}
