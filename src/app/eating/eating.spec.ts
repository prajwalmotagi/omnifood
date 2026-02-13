import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eating } from './eating';

describe('Eating', () => {
  let component: Eating;
  let fixture: ComponentFixture<Eating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
