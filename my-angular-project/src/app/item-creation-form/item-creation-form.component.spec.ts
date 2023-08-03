import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreationFormComponent } from './item-creation-form.component';

describe('ItemCreationFormComponent', () => {
  let component: ItemCreationFormComponent;
  let fixture: ComponentFixture<ItemCreationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCreationFormComponent]
    });
    fixture = TestBed.createComponent(ItemCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
