import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 76,
      label: 'faves',
    },
    { value: 967, label: 'Views' },
    { value: 85, label: 'Users' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is fantastic and comfortable couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This dresser will hold a lot of your stuff',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
