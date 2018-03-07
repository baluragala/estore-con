import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { ManageProductComponent } from "./manage-product/manage-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageProductReactiveComponent } from "./manage-product-reactive/manage-product-reactive.component";
import { ReactiveOrderFormComponent } from "./reactive-order-form/reactive-order-form.component";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductListItemComponent,
    ManageProductComponent,
    ManageProductReactiveComponent,
    ReactiveOrderFormComponent
  ],
  exports: [
    ProductListItemComponent,
    ManageProductComponent,
    ManageProductReactiveComponent,
    ReactiveOrderFormComponent
  ]
})
export class ProductModule {}
