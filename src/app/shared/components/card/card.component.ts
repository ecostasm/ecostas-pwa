import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardsComponent implements OnInit {

  @Input() showButtons: boolean = true;

  constructor() {}

  ngOnInit(): void {}


}