import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStageComponent } from './choose-stage.component';

describe('ChooseStageComponent', () => {
  let component: ChooseStageComponent;
  let fixture: ComponentFixture<ChooseStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseStageComponent]
    });
    fixture = TestBed.createComponent(ChooseStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
