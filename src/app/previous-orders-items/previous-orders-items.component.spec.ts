import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrdersItemsComponent } from './previous-orders-items.component';

describe('PreviousOrdersItemsComponent', () => {
  let component: PreviousOrdersItemsComponent;
  let fixture: ComponentFixture<PreviousOrdersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousOrdersItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrdersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
