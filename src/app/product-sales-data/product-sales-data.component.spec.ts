import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesDataComponent } from './product-sales-data.component';

describe('ProductSalesDataComponent', () => {
  let component: ProductSalesDataComponent;
  let fixture: ComponentFixture<ProductSalesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSalesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSalesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
