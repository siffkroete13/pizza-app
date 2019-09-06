import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscriber, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productTypes : string[] = ['vorspeise', 'pizza', 'doener','dueruem', 'pide', 'lahmacun', 'hauptspeise', 'dessert',
  'getraenk', 'teigwaren', 'antipasti'];

  public countries : string[] = ['turkey','italy'];

  public products: Product[] = [];

  private productExample: Product;

  private productProperties: string[] = [];

  constructor(private http : HttpClient) {
    this.productExample = new Product(this.productTypes[0], this.countries[0]);

    for(let property in this.productExample) {
      this.productProperties.push(property);
    }
    console.log('FoodService::constructor(): properties: ', this.productProperties);
  }

  public setProduct(index: number, product: Product): boolean {
    if(index < this.products.length) {
      this.products[index] = product;
      return true;
    } else {
      return false;
    }
  }

  public getKeys(): string[] {
    if(this.products.length > 0) {
      // console.log('this.products: ', this.products);
      return Object.keys(this.products[0]);
    } else {
      return [];
    }
  }

  private request(method: 'post'|'get'|'put'|'delete', type: 'insert'|'update'|'updateAll'|'get'|'getAll'
  |'delete', element?: Product | Product[] | '', filter?: any): Observable<any> {
     // Mock-Data
    return of({ 'data' : [
      {'foodName': 'Döner','productType': 'Doener', 'price': 8.5, '_id':123},
      {'foodName': 'Kebab','productType': 'Doener', 'price': 7.5, '_id': 123 },
      {'foodName': 'pizza','productType': 'Pizza', 'price': 13.5, '_id': 123 },
      {'foodName': 'salat','productType': 'Vorspeise', 'price': 5.5, '_id': 123 }
    ]});
  }

  private request2(method: 'post'|'get'|'put'|'delete', type: 'insert'|'update'|'updateAll'|'get'|'getAll'
  |'delete', element?: Product | Product[] | '', filter?: any): Observable<any> {

    let base;
    if (method === 'post') {
      base = this.http.post(`/${type}`, element);
    } else if(method === 'get') {
      console.log('request, method: ', method);
      console.log('type: ', type);
      console.log('filter: ', filter);

      const params = new  HttpParams().set('_page', "1").set('_limit', "1");
      const httpHeaders = new HttpHeaders( { 'name': 'Hi Welt!!!'} );
      httpHeaders.set('Content-Type', 'application/json');
      const options = { headers: httpHeaders};

      base = this.http.get(`/${type}`, options);

    }
    return base;
  }

  public insert(element) : Observable<any> {
    return this.request('post','insert', element);
  }

  public update(element : Product) {
    return this.request('put', 'update', element, '');
  }

  public updateAll(elements : Product[], filter) {
    return this.request('put', 'updateAll', elements, filter);
  }

  public load(filter: string) {

  }

  public loadAll() : Observable<Product[]> {
    let filter = {'fields': ''};
    let firtst = true;
    for(let property of this.productProperties) {
      if(firtst) {
        firtst = false;
      } else {
        filter['fields'] += ' ';
      }
      filter['fields'] += property;
    }

    return this.request('get', 'getAll', '', filter).pipe(
      map( (data) => {
        console.log('pipe(), map(), data.data: ', data.data);
        if(data && data.data) {
          for(let i in data.data) {
            this.products.push(new Product(this.productTypes[0], this.countries[0]));
            this.products[i] = data.data[i];
            console.log('for-Schleife: this.products[' + i +  '] : ', data.data[i]);
          }
        }
        this.products = data.data;
        return data.data;
      })
    );
  }

  public deleteProduct(index: number) {
    if(index < this.products.length) {
      this.products.splice(index, 1);
    }
    // return this.http.delete('/delete', { headers: { filter: filter } });
  }
}
