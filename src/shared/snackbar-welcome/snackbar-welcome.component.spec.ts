import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarWelcomeComponent } from './snackbar-welcome.component';

describe('SnackbarWelcomeComponent', () => {
  let component: SnackbarWelcomeComponent;
  let fixture: ComponentFixture<SnackbarWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarWelcomeComponent]
    });
    fixture = TestBed.createComponent(SnackbarWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
