import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
RentCar = [
{image: 'https://autosummit.cl/wp-content/uploads/2020/08/FOTO-CATALOGO-ALL-NEW-TERRITORY.png',
brand: 'Ford',
color: 'pink',
doors: 2,
price: 46,
},
{image: 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/businessindia/Review_Honda_s_3648.jpg',
brand: 'Honda',
color: 'green',
doors: 5,
price: 39,
},
{image: 'https://prod.pictures.autoscout24.net/listing-images/6dc584da-24fe-4be8-8ae9-43f1685fce63_f3e12aa9-9cb5-4a45-9001-57e677173034.jpg/640x480.jpg',
brand: 'VW',
color: 'Black',
doors: 4,
price: 25,
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
