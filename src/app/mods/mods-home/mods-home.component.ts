import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'Why is the sky blue?',
      content:
        "Gases and particles in Earth's atmosphere scatter sunlight in all directions. Blue light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.",
    },
    {
      title: 'What is a dog?',
      content:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
    },
    {
      title: 'What is the major difference between a bird and a fly?',
      content: 'A Bird can fly, but a fly cannot bird!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
