import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalEducationTrainingSolutionsComponent } from './vocational-education-training-solutions.component';

describe('VocationalEducationTrainingSolutionsComponent', () => {
  let component: VocationalEducationTrainingSolutionsComponent;
  let fixture: ComponentFixture<VocationalEducationTrainingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocationalEducationTrainingSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocationalEducationTrainingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
