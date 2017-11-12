import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchCarouselComponent } from './product-search-carousel.component';

describe('ProductSearchCarouselComponent', () => {
  let component: ProductSearchCarouselComponent;
  let fixture: ComponentFixture<ProductSearchCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
