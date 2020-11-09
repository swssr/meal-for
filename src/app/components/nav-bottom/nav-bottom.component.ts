import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.scss'],
})
export class NavBottomComponent implements OnInit {
  pages = [
    {
      label: 'Home',
      img: 'https://www.flaticon.com/svg/static/icons/svg/747/747420.svg',
    },
    {
      label: 'Favourites',
      img: 'https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg',
    },
    {
      label: 'History',
      img: 'https://www.flaticon.com/svg/static/icons/svg/93/93652.svg',
    },
    {
      label: 'Profile',
      img: 'https://www.flaticon.com/svg/static/icons/svg/1946/1946429.svg',
    },
  ];

  currentPage: string = this.pages[0].label;

  constructor() {}

  ngOnInit(): void {}

  setPage(page: string) {
    this.currentPage = page;
  }
}
