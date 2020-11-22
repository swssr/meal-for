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

  async handleBuy(_data: any) {
    const data = {
      BankReference: 'MealFor ' + _data.name,
      TransactionReference: 'MealFor ' + _data.name,
      Amount: 700,
      // NotifyUrl: `${API_URL}/notify`,
    };

    // await window["postToServer"](data)
    this.http
      .post(`${API_URL}/pay`, data)
      .toPromise()
      .then((res: any) => {
        console.log('INSIDE RESPONSE!');
        console.log({ res });
        // this.html = res?.error.text;
        // window.location.href = error.error?.text;
        this.uicontext.modalData.next(this.html);
      })
      .catch((error: any) => {
        console.log('INSIDE ERROR!');
        console.log({ error });

        this.html = error.error?.text;

        // window.location.href = error.error?.text;
        this.uicontext.modalData.next(this.html);
      });
  }
}
