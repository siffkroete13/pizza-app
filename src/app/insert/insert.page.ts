import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';
import { Product } from '../product';

@Component({
  selector: 'app-insert',
  templateUrl: 'insert.page.html',
  styleUrls: ['insert.page.scss']
})
export class InsertPage implements OnInit {

  private product : Product;

  public items: any[] = [];

  constructor(private productService: ProductService, private messagesService: MessageService) {
    this.product = new Product(this.productService[0], productService.countries[0]);

    for(let i in this.product) {
      this.items.push({'name': i, 'product': this.product[i]});
    }
    console.log('InsertPage::constructor(..), items: ', this.items);
  }

  ngOnInit() {}

  public onSubmitted(item) {
    console.log('inside onSubmitted: items: ', item);

    for(let i in item) {

    }

    this.productService.insert(this.product).subscribe( (data) => {
      console.log('insert.page::insert(): callback-success: data: ', data);
      this.messagesService.add('Added meal to the menu!')
    }, (err) => {
      console.log('Error on adding meal to menu!: ', err);
      this.messagesService.add('Error on adding meal to menu! Error message: ' + err);
    });
  }
}
