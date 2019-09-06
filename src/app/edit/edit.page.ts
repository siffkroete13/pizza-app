import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public products: Product[];

  constructor(private productService : ProductService, private messagesService: MessageService) {
    this.loadAll();
  }

  ngOnInit() {}

  public loadAll() {
    console.log('loadAll()');
    this.productService.loadAll().subscribe( (data) =>  {
      console.log('EditPage.getAll() succeeded!', data);
      this.messagesService.add('Got Products!');
      this.products = data;
    }, (err) => {
      console.log('update-food.component:getAll(), err: ', err);
      this.messagesService.add('Error message: ' + JSON.stringify(err) );
    });
  }

  public getItems() {
    let items = [];
    for(let i in this.products) {
      items.push({'name': i, 'product': this.products[i], 'collapsed': true});
    }
    return items;
  }
}
