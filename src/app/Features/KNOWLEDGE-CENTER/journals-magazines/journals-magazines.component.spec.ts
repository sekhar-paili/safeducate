import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsMagazinesComponent } from './journals-magazines.component';

describe('JournalsMagazinesComponent', () => {
  let component: JournalsMagazinesComponent;
  let fixture: ComponentFixture<JournalsMagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalsMagazinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JournalsMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
