import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMasterDataComponent } from './list-master-data/list-master-data.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductSalesDataComponent } from './product-sales-data/product-sales-data.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListMasterDataComponent},
  { path: 'new', component: CreateProductComponent},
  { path: 'show/:id', component: ProductSalesDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
