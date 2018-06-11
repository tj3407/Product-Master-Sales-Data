import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMasterDataComponent } from './list-master-data.component';

describe('ListMasterDataComponent', () => {
  let component: ListMasterDataComponent;
  let fixture: ComponentFixture<ListMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
