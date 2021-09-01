import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work';
import { AddToShopService } from 'src/app/services/addToShop/add-to-shop.service';
import { SearchApiService } from 'src/app/services/searchApi/search-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private searchApi: SearchApiService, private addToShopService: AddToShopService) { }

  ngOnInit(): void {
  }

  works?: Work[];
  results?: number;
  byTitle = '';
  byAuthor = '';

  search() {
    if (this.byTitle && !this.byAuthor) {
      this.searchApi.searchByTitle(this.byTitle).subscribe(
        response => {
          this.works = response.docs;
          this.results = response.num_found;
        }
      )
    } else if (this.byAuthor && !this.byTitle) {
      this.searchApi.searchByAuthor(this.byAuthor).subscribe(
        response => {
          this.works = response.docs;
          this.results = response.num_found;
          console.log(response.docs)
        }
      )
    } else if (this.byAuthor && this.byTitle) {
      this.searchApi.searchByTitle(this.byTitle).subscribe(
        response => {
          this.works = response.docs;
          this.results = response.num_found;
        }
      )
    } else if (!this.byAuthor && !this.byTitle) {
      alert('Please fill in one of the fields')
    }
  }

  addToShop(item: Work) {
    
    const priceInput = Number(prompt('How much should this book cost?'));
    const inventoryInput = Number(prompt('How many of this book do you have?'));

    const completeItem = { ...item, price: priceInput, inventory: inventoryInput };
    this.addToShopService.addBook(completeItem).subscribe(
      response => {
        alert(`Successfully added ${item.title} by ${item.author_name} to the shop!`);
      }
    )
  }

}
