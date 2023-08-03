import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecTileComponent } from './spec-tile.component';

describe('SpecTileComponent', () => {
  let component: SpecTileComponent;
  let fixture: ComponentFixture<SpecTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecTileComponent]
    });
    fixture = TestBed.createComponent(SpecTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
