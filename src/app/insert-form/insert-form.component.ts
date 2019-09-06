import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss'],
})
export class InsertFormComponent implements OnInit {

  @Input() items: any[];
  @Output() _submitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    console.log('InsertFormComponent.constructor(), this.items: ', this.items);
  }

  public insert() {
    console.log('InsertFormComponent.insert()');
    this._submitted.emit(this.items);
  }

}
