import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() meal: Meal;
  constructor() {}

  ngOnInit(): void {}
}
