import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
RentCar = [
{brand: 'Ford',
color: 'pink',
doors: 2,
},
{brand: 'Honda',
color: 'green',
doors: 5,
},
{brand: 'VW',
color: 'Black',
doors: 4,
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
