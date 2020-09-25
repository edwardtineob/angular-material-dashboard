import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  @Input() menuItems: any[];
  // menuItems: any[] = [{
  //   item: 'Nuevo', path: ''
  // }];

  constructor() {}

  ngOnInit() {
  }

  menuClick() {
  //  document.getElementById('main-panel').style.marginRight = '260px';
  }
}
