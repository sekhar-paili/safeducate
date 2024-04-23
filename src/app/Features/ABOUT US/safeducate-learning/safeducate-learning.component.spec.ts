import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeducateLearningComponent } from './safeducate-learning.component';

describe('SafeducateLearningComponent', () => {
  let component: SafeducateLearningComponent;
  let fixture: ComponentFixture<SafeducateLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeducateLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafeducateLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
