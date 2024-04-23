import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSpeaksComponent } from './students-speaks.component';

describe('StudentsSpeaksComponent', () => {
  let component: StudentsSpeaksComponent;
  let fixture: ComponentFixture<StudentsSpeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsSpeaksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
