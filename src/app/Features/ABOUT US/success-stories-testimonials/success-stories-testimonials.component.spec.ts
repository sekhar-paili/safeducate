import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoriesTestimonialsComponent } from './success-stories-testimonials.component';

describe('SuccessStoriesTestimonialsComponent', () => {
  let component: SuccessStoriesTestimonialsComponent;
  let fixture: ComponentFixture<SuccessStoriesTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessStoriesTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessStoriesTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
