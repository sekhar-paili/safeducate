import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialInitiativesComponent } from './special-initiatives.component';

describe('SpecialInitiativesComponent', () => {
  let component: SpecialInitiativesComponent;
  let fixture: ComponentFixture<SpecialInitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialInitiativesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
