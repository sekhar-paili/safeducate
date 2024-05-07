import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipTeamComponent } from './leadership-team.component';

describe('LeadershipTeamComponent', () => {
  let component: LeadershipTeamComponent;
  let fixture: ComponentFixture<LeadershipTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadershipTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
