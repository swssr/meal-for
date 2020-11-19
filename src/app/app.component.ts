import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/config';
import { Meal } from './interfaces';
import { Restaurant } from './interfaces/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'meal-for';

  tabs = ['Restaurant', 'Order In', 'Customize'];
  activeTab: string = this.tabs[1];

  menu: Meal[] = null;
  restaurants: Restaurant[] = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMenu();
    this.getRestaurants();
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
