import { ElementRef, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IBudget } from './interfaces/budget';
import { IShoppingItem } from './interfaces/shoppingItem';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BudgetingService {
  budgetArray: IBudget[];
  shoppingArray: IShoppingItem[];

  constructor(private http: HttpClient) {
    this.budgetArray = [];
    this.shoppingArray = [];
  }

  /**
   *
   * Budgeting handlers
   *
   */

  getBudgetArray(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/budgets', { withCredentials: true })
      .pipe(
        tap((results) => {
          const newBudgArr = results as IBudget[];

          newBudgArr.forEach((x) => {
            const stringDate = x.date;
            x.date = new Date(stringDate);
          });

          this.budgetArray = newBudgArr;
        })
      );
  }

  postBudgetItem(obj: NgForm): void {
    const newList: IBudget = { ...obj.value, isDone: false };
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

  /**
   *
   * Shopping handlers
   *
   */

  getShoppingArray(): Observable<any> {
    console.log('get shoppingArray')
    return this.http
      .get('http://localhost:3000/api/shopping', { withCredentials: true })
      .pipe(
        tap((results) => {
          const newShopArr = results as IShoppingItem[];

          this.shoppingArray = newShopArr;
        })
      );
  }

  postShoppingItem(obj: NgForm): void {

    const newItem: IShoppingItem = { ...obj.value, isDone:false };
    this.http
      .post('http://localhost:3000/api/shopping', newItem, {
        withCredentials: true,
      })
      .subscribe();
    this.shoppingArray.push(newItem);
  }



}
