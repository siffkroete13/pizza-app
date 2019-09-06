import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css']
})
export class AccordionListComponent implements OnInit {
  @Input() public items: any[];
  public status = true;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  public toggle(item) {
    this.status = !this.status;
  }
}
