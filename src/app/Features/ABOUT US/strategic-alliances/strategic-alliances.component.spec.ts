import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicAlliancesComponent } from './strategic-alliances.component';

describe('StrategicAlliancesComponent', () => {
  let component: StrategicAlliancesComponent;
  let fixture: ComponentFixture<StrategicAlliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicAlliancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategicAlliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
