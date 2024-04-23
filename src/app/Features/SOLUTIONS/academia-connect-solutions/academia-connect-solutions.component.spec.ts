import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaConnectSolutionsComponent } from './academia-connect-solutions.component';

describe('AcademiaConnectSolutionsComponent', () => {
  let component: AcademiaConnectSolutionsComponent;
  let fixture: ComponentFixture<AcademiaConnectSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiaConnectSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademiaConnectSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
