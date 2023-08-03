import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpiDetailsComponent } from './tpi-details.component';

describe('TpiDetailsComponent', () => {
  let component: TpiDetailsComponent;
  let fixture: ComponentFixture<TpiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TpiDetailsComponent]
    });
    fixture = TestBed.createComponent(TpiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
