import { Component, OnInit } from '@angular/core';
import { MenuIcon } from 'src/app/models/menu-icon.model';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public menuItems = [
    new MenuIcon(
      { width: '50%', margin: '2px' },
      'dis-inl menu-icon',
      'fa fa-search'
    ),
    new MenuIcon(
      { width: '50%', margin: '2px' },
      'dis-inl menu-icon',
      'fa-solid fa-circle-plus'
    ),
  ];

  ngOnInit(): void {}
}
