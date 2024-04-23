import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchConsultingSolutionsComponent } from './research-consulting-solutions.component';

describe('ResearchConsultingSolutionsComponent', () => {
  let component: ResearchConsultingSolutionsComponent;
  let fixture: ComponentFixture<ResearchConsultingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchConsultingSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchConsultingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
