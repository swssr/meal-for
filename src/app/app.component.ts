import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { API_URL } from 'src/config';
import { Meal } from './interfaces';
import { Restaurant } from './interfaces/restaurant';
import { UIContextService } from './services/ui-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'meal-for';

  tabs = ['Restaurant', 'Order In', 'Customize'];
  activeTab: string = this.tabs[1];

  menu: Meal[] = null;
  restaurants: Restaurant[] = null;

  subs;

  modalData;

  constructor(private http: HttpClient, private uicontext: UIContextService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getMenu();
    this.getRestaurants();

    this.uicontext.modalData.subscribe((data) => {
      if (data) {
        this.modalData = data;
      }
    });
  }

  async handleDonate() {
    this.http.get(`${API_URL}/donate`).subscribe((res: any) => {
      if (!res) return;
      this.menu = res;
      alert("Awesome! You're donation was received successfully.");
    });
  }
  async getMenu() {
    this.http.get(`${API_URL}/menu`).subscribe((res: any) => {
      if (!res) return;
      this.menu = res;
    });
  }

  async getRestaurants() {
    this.http
      .get<{ restaurants: Restaurant[] } | null>(
        'https://tablefor.ew.r.appspot.com/restaurant/list'
      )
      .subscribe((res) => {
        if (!res) return;
        this.restaurants = res?.restaurants;
        console.log(this.restaurants);
      });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
