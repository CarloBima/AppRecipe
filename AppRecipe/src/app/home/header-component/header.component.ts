import { Component, OnInit } from '@angular/core';
import { MenuIcon } from 'src/app/models/menu-icon.model';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public name: string = 'Anna'; // TODO: Interpolate this string in the title
  private searchIcon = 'fa fa-search'; // useful for method onClick

  public menuItems = [
    new MenuIcon(
      { width: '50%', margin: '2px' },
      'dis-inl menu-icon',
      this.searchIcon
    ),
    new MenuIcon(
      { width: '50%', margin: '2px' },
      'dis-inl menu-icon',
      'fa-solid fa-circle-plus'
    ),
  ];

  ngOnInit(): void {}

  public menuItemClick(e: any) {
    const sender = e.target.className;
    const isSearchBtn = sender.indexOf(this.searchIcon) != -1;
    if (isSearchBtn) {
      this.btnSearchOnClick();
    } else {
      this.btnAddOnClick();
    }
  }

  public btnSearchOnClick(e?: any) {
    console.log('btnSearch clicked', e);
  }
  public btnAddOnClick(e?: any) {
    console.log('btnAdd clicked', e);
  }
}
