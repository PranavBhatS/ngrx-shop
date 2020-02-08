import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { delay } from "rxjs/operators"
import { ShoppingItem } from './store/models/shopping-item.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private SHOPPING_URL = "http://localhost:3000/shopping"
  constructor(private httpClient: HttpClient) { }

  getShoppingItems() {
    return this.httpClient.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(delay(500))
  }
  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.httpClient.post(this.SHOPPING_URL, shoppingItem).pipe(delay(500))
  }

  deleteShoppingItem(id: String) {
    return this.httpClient.delete(`${this.SHOPPING_URL}/${id}`).pipe(delay(500))

  }
}
