import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPartsComponent } from './get-parts.component';

describe('GetPartsComponent', () => {
  let component: GetPartsComponent;
  let fixture: ComponentFixture<GetPartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPartsComponent]
    });
    fixture = TestBed.createComponent(GetPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
