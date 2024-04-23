import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCentreComponent } from './knowledge-centre.component';

describe('KnowledgeCentreComponent', () => {
  let component: KnowledgeCentreComponent;
  let fixture: ComponentFixture<KnowledgeCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowledgeCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
