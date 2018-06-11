import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListMasterDataComponent } from './list-master-data/list-master-data.component';
import { ProductSalesDataComponent } from './product-sales-data/product-sales-data.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DataService } from './data.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMasterDataComponent,
    ProductSalesDataComponent,
    CreateProductComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
