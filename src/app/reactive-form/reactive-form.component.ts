import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {

  private formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('Dayana', Validators.required),
      country: new FormControl('Turkey', Validators.required)
   });
  }
}
