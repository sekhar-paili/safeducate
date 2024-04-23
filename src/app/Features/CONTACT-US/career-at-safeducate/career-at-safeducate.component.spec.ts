import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAtSafeducateComponent } from './career-at-safeducate.component';

describe('CareerAtSafeducateComponent', () => {
  let component: CareerAtSafeducateComponent;
  let fixture: ComponentFixture<CareerAtSafeducateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerAtSafeducateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerAtSafeducateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
