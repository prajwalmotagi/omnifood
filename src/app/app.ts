import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Feature } from './feature/feature';
import { Works } from "./works/works";
import { Meals } from "./meals/meals";
import { Testimonials } from "./testimonials/testimonials";
import { Price } from "./price/price";
import { Eating } from "./eating/eating";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Feature, Works, Meals, Testimonials, Price, Eating, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('omnifood');
}
