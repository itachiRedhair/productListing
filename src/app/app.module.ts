import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductSearchCarouselComponent } from './components/product-search-carousel/product-search-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductFilterComponent,
    ProductSortComponent,
    ProductSearchCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
