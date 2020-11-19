import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() meal: Meal;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleBuy(_meal: Meal) {
    const data = {
      SiteCode: 'L5BBE^dVnedQDnTFfzex6_rpHWTDD#npcK4Zqv*e',
      CountryCode: 'SA',
      CurrencyCode: 'ZAR',
      Amount: _meal.amount,
      TransactionReference: 'dVnedQDnTFfzex6_rpHWTDD#npcK4Zqv*e',
      IsTest: true,
      HashCheck:
        'VnedQDnTFfzex6_rpHWTDD#npcK4Zqv*eBE^dVnedQDnTFfzex6_rpHWTDD#npcK4Zqv*e',
      NotifyUrl: 'https://api.tablefor.app/confirm_payment',
    };

    const options = {};

    this.http
      .post('https://pay.ozow.com', data, options)
      .toPromise()
      .then((value) => {
        console.log({ value });
      })
      .catch((err) => {
        console.log({ err });
      });
  }
}
