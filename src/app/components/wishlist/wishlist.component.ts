import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Wishlist } from 'src/app/models/wishlist';
import { GetWishlistService } from 'src/app/services/getWishlist/get-wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private getWishlistService: GetWishlistService) {}

  ngOnInit(): void {
    this.getWishlist();
  }

wishes?: Wishlist[];

changeBoolean(book:Book) {
  if(book.flag){
    book.flag = false;
  }else {
    book.flag = true;
  }
}
 
//  @Output() onGetShop:EventEmitter<any> = new EventEmitter();

  getWishlist() {
    this.getWishlistService.getWishlist().subscribe(
      response => {
        response.forEach(item => item.book.flag = false);
        this.wishes = response;
      }
    )
  }
}
