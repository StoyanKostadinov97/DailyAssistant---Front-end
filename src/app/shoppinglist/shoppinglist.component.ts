import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IShoppingItem } from '../interfaces/shoppingItem';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  @Input() item!: IShoppingItem;

  isClicked: boolean;

  constructor() {
    this.isClicked = false;
  }

  ngOnInit(): void {
    
  }

  changeValue() {

    setTimeout(() => {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);

    }, 500)

  }


}
