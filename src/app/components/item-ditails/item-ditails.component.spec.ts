import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDitailsComponent } from './item-ditails.component';

describe('ItemDitailsComponent', () => {
  let component: ItemDitailsComponent;
  let fixture: ComponentFixture<ItemDitailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDitailsComponent]
    });
    fixture = TestBed.createComponent(ItemDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
