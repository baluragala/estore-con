import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { ManageProductComponent } from "./manage-product/manage-product.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [ProductListItemComponent, ManageProductComponent],
  exports: [ProductListItemComponent, ManageProductComponent]
})
export class ProductModule {}
