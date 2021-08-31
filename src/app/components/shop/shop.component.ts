import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopInfoService } from '../../services/shopInfo/shop-info.service';
import { Books } from '../../models/books';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private getBooks: ShopInfoService) {}

  ngOnInit(): void {
  }

//   getShop() {
//     console.log(this.getBooks.getAllBooks());
//  }

books?: Books;


 
 @Output() onGetShop:EventEmitter<any> = new EventEmitter();

  getShop(): any{
    this.getBooks.getAllBooks().subscribe(
      response => {
        this.books = response;
        this.onGetShop.emit();
        // return this.books;
        console.log(this.books);
      }
    )
  }

  // showShop(): void {
  //   console.log(this.getShop());
  // }
}
