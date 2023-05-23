import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerInfoComponent } from './freelancer-info.component';

describe('FreelancerInfoComponent', () => {
  let component: FreelancerInfoComponent;
  let fixture: ComponentFixture<FreelancerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerInfoComponent]
    });
    fixture = TestBed.createComponent(FreelancerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
