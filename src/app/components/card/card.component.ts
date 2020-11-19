import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// import { Meal } from 'src/app/interfaces';
import { API_URL } from '../../../config/';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleBuy(_data: any) {
    const data = {
      SiteCode: 'TSTSTE0001',
      CountryCode: 'ZA',
      CurrencyCode: 'ZAR',
      Amount: _data.amount || 10.0,
      IsTest: true,
      privateKey: '215114531AFF7134A94C88CEEA48E',
      NotifyUrl: `${API_URL}/notify`,
    };

    this.http.post(`${API_URL}/pay`, data).subscribe({
      error: console.log,
      complete: console.log,
    });
  }
}
