import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { ManageProductComponent } from "./manage-product/manage-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageProductReactiveComponent } from "./manage-product-reactive/manage-product-reactive.component";
import { ReactiveOrderFormComponent } from "./reactive-order-form/reactive-order-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductListItemComponent,
    ManageProductComponent,
    ManageProductReactiveComponent,
    ReactiveOrderFormComponent,
    ProductListComponent
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
