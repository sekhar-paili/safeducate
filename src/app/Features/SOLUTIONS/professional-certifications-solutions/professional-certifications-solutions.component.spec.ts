import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCertificationsSolutionsComponent } from './professional-certifications-solutions.component';

describe('ProfessionalCertificationsSolutionsComponent', () => {
  let component: ProfessionalCertificationsSolutionsComponent;
  let fixture: ComponentFixture<ProfessionalCertificationsSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalCertificationsSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalCertificationsSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
