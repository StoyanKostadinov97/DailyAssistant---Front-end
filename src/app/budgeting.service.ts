import { ElementRef, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IBudget } from './interfaces/budget';
import { IShoppingItem } from './interfaces/shoppingItem';

@Injectable()
export class BudgetingService {
  budgetArray: IBudget[];
  shoppingArray: IShoppingItem[];

  constructor(private http: HttpClient) {
    this.budgetArray = [];
    this.shoppingArray = [
      {
        isDone: false,
        productName: 'bananas',
      },
      {
        isDone: false,
        productName: 'cheese',
      },
      {
        isDone: false,
        productName: 'laptop',
      },
    ];
  }
  getBudgetArray(): void {
    this.http
      .get('http://localhost:3000/api/budgets', { withCredentials: true })
      .subscribe((results) => {
        const newBudgArr = results as IBudget[];

        newBudgArr.forEach((x) => {
          const stringDate = x.date;
          x.date = new Date(stringDate);
        });

        this.budgetArray = newBudgArr;
      });
  }

  postBudgetItem(obj: NgForm): void {
    const newList: IBudget = { ...obj.value, date: new Date() };
    this.http
      .post('http://localhost:3000/api/budgets', newList, {
        withCredentials: true,
      })
      .subscribe();
    this.budgetArray.push(newList);
  }

  deleteBudgetItem(id: string) {
    this.http
      .delete(`http://localhost:3000/api/budgets/${id}`, {
        withCredentials: true,
      })
      .subscribe();
  }

  getShoppingFormData(obj: NgForm): void {
    this.shoppingArray.push({ ...obj.value, isDone: false } as IShoppingItem);
  }
}
