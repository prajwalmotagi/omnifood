import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Feature } from '../feature/feature';
import { Works } from '../works/works';
import { Meals } from '../meals/meals';
import { Testimonials } from '../testimonials/testimonials';
import { Price } from '../price/price';
import { Eating } from '../eating/eating';


@Component({
  selector: 'app-home',
  imports: [ Hero, Feature, Works, Meals, Testimonials, Price, Eating],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
