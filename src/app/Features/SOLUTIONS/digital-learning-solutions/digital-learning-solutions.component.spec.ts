import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLearningSolutionsComponent } from './digital-learning-solutions.component';

describe('DigitalLearningSolutionsComponent', () => {
  let component: DigitalLearningSolutionsComponent;
  let fixture: ComponentFixture<DigitalLearningSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalLearningSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalLearningSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
