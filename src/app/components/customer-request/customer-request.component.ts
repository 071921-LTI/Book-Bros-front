import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requestBook/request.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  request = {
    title: '',
    author: ''
  }

  requestBook() {
    console.log("in requestBook() method")
    console.log(this.getTokenId() + ' ' +  this.request.title + ' ' +  this.request.author);
    this.requestService.request(this.request.title, this.request.author).subscribe()
  }

  id?: any;
  getTokenId() {
    this.id = sessionStorage.getItem("token");
    let splitted = this.id.split(':', 1);
    console.log(splitted[0])
    return splitted[0];
}
}
