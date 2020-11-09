import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from './interfaces';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMenu();
  }

  async getMenu() {
    this.http.get('http://localhost:5000/menu').subscribe((res: any) => {
      if (!res) return;
      this.menu = res;
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
