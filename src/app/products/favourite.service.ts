import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }

  private favouriteSubject = new BehaviorSubject<Product>(null);
  favourite$: Observable<Product> = this.favouriteSubject.asObservable();

  private favourites: Set<Product> = new Set();

  addToFavourites(product: Product) {
    this.favourites.add(product);
    this.favouriteSubject.next(product);
  }

  getFavouritesNb(): number {
    return this.favourites.size;
  }
}
