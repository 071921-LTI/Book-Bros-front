import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopInfoService } from '../../services/shopInfo/shop-info.service';
import { PurchaseBookService } from '../../services/purchaseBook/purchase-book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private getBooks: ShopInfoService, private addPurchase: PurchaseBookService) {}

  ngOnInit(): void {
    this.getShop();
  }

books?: Book[];
purchase?: Book

changeBoolean(book:Book) {
  if(book.flag){
    book.flag = false;
  }else {
    book.flag = true;
  }
}
 
//  @Output() onGetShop:EventEmitter<any> = new EventEmitter();

  getShop() {
    this.getBooks.getAllBooks().subscribe(
      response => {
        response.forEach(item=>item.flag=false)
        this.books = response;
        // this.onGetShop.emit();
        console.log(this.books);
      }
    )
  }

  buyBook(purchase: Book) {
    console.log(purchase)
    this.addPurchase.addPurchase(purchase).subscribe();
    this.getShop();
    }
}


