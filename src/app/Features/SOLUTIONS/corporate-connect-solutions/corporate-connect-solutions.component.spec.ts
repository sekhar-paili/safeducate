import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateConnectSolutionsComponent } from './corporate-connect-solutions.component';

describe('CorporateConnectSolutionsComponent', () => {
  let component: CorporateConnectSolutionsComponent;
  let fixture: ComponentFixture<CorporateConnectSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateConnectSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateConnectSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
