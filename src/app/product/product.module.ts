import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { ManageProductComponent } from "./manage-product/manage-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageProductReactiveComponent } from "./manage-product-reactive/manage-product-reactive.component";
import { ReactiveOrderFormComponent } from "./reactive-order-form/reactive-order-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "products",
        component: ProductListComponent
      },
      { path: "detail/:pname", component: ProductDetailComponent }
    ])
  ],
  declarations: [
    ProductListItemComponent,
    ManageProductComponent,
    ManageProductReactiveComponent,
    ReactiveOrderFormComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListItemComponent,
    ManageProductComponent,
    ManageProductReactiveComponent,
    ReactiveOrderFormComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
