import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTrendsComponent } from './latest-trends.component';

describe('LatestTrendsComponent', () => {
  let component: LatestTrendsComponent;
  let fixture: ComponentFixture<LatestTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestTrendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
