import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListItemComponent],
  exports: [ProductListItemComponent]
})
export class ProductModule {}
