import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statictics',
  templateUrl: './statictics.component.html',
  styleUrls: ['./statictics.component.css'],
})
export class StaticticsComponent implements OnInit {
  @Input() data = [];

  constructor() {}

  ngOnInit(): void {}
}
