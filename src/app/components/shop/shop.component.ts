import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ShopInfoService } from '../../services/shopInfo/shop-info.service';
import { ShopInfoByService } from '../../services/shopInfoBy/shop-info-by.service';
import { PurchaseBookService } from '../../services/purchaseBook/purchase-book.service';
import { Book } from '../../models/book';
import { NewWishlist } from 'src/app/models/newWishlist';
import { AddToWishlistService } from 'src/app/services/addToWishlist/add-to-wishlist.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild('title')
  title!: ElementRef;
  @ViewChild('author')
  author!: ElementRef;

constructor(
  private getBooks: ShopInfoService, 
  private addToWishlistService: AddToWishlistService, 
  private addPurchase: PurchaseBookService,
  private getBooksBy: ShopInfoByService) {}

  ngOnInit(): void {
    this.getShop();
  }

books?: Book[];
purchase?: Book
userRole: string = `${sessionStorage.getItem('token')}`.split(':')[1];
 
//  @Output() onGetShop:EventEmitter<any> = new EventEmitter();

  getShop() {
    this.getBooks.getAllBooks().subscribe(
      response => {
        response.forEach(item=> item.dataTarget = "#" + item.id)
        this.books = response;
        // this.onGetShop.emit();
        console.log(this.books);
      }
    )
  }

  searchAuthor(authorT:string) {
    this.getBooksBy.getBooksByAuthorOrTitle('author/' + authorT).subscribe(
      response => {
        response.forEach(item => {item.dataTarget = "#" + item.id})
        this.books = response;
        // this.onGetShop.emit();
        console.log(this.books);
      }
    )
    this.author.nativeElement.value = '';
  }

  searchTitle(titleT:string) {
    this.getBooksBy.getBooksByAuthorOrTitle('title/' + titleT).subscribe(
      response => {
        response.forEach(item=>item.dataTarget = "#" + item.id)
        this.books = response;
        // this.onGetShop.emit();
        console.log(this.books);
      }
    )
    this.title.nativeElement.value = '';
  }

  buyBook(purchase: Book) {
    console.log(purchase)
    this.addPurchase.addPurchase(purchase).subscribe();
    this.getShop();
    }

  addToWishlist(book: Book) {
    const wish = {
      book: book,
      dateAdded: new Date()
    }

    this.addToWishlistService.addToWishlist(wish).subscribe(
      response => console.log(response)
    )
  }
}


