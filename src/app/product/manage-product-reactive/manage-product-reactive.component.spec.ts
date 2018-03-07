import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductReactiveComponent } from './manage-product-reactive.component';

describe('ManageProductReactiveComponent', () => {
  let component: ManageProductReactiveComponent;
  let fixture: ComponentFixture<ManageProductReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
