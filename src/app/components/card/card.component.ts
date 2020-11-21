import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UIContextService } from 'src/app/services/ui-context.service';
// import { Meal } from 'src/app/interfaces';
import { API_URL } from '../../../config/';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any;

  httpHeaders;
  html: string;
  constructor(private http: HttpClient, private uicontext: UIContextService) {}

  ngOnInit(): void {}

  handleBuy(_data: any) {
    const data = {
      SiteCode: 'TSTSTE0001',
      CountryCode: 'ZA',
      CurrencyCode: 'ZAR',
      Amount: _data.amount,
      IsTest: true,
      privateKey: '215114531AFF7134A94C88CEEA48E',
      NotifyUrl: `${API_URL}/notify`,
    };

    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.set(
      'Accept',
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    );

    this.http
      .post(`${API_URL}/pay`, data, { headers: this.httpHeaders })
      .toPromise()
      .then((res: any) => {
        console.log('INSIDE RESPONSE!');
        this.html = res?.error.text;

        this.uicontext.modalData.next(this.html);
      })
      .catch((error: HttpErrorResponse) => {
        console.log('INSIDE ERROR!');
        console.log(error);
        this.html = error.error?.text;

        this.uicontext.modalData.next(this.html);
      });
  }
}
