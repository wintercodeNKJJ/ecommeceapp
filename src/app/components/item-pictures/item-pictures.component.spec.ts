import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPicturesComponent } from './item-pictures.component';

describe('ItemPicturesComponent', () => {
  let component: ItemPicturesComponent;
  let fixture: ComponentFixture<ItemPicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPicturesComponent]
    });
    fixture = TestBed.createComponent(ItemPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
