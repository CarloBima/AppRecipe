import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css'],
})
export class TitleComponentComponent implements OnInit {
  @Input() text: string = 'LOREM IPSUM';
  constructor() {}

  ngOnInit(): void {}
}
