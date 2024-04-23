import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseSpecializationComponent } from './expertise-specialization.component';

describe('ExpertiseSpecializationComponent', () => {
  let component: ExpertiseSpecializationComponent;
  let fixture: ComponentFixture<ExpertiseSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseSpecializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertiseSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
