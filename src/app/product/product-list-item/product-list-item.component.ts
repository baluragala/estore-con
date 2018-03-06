import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductItem } from "../product.interface";

@Component({
  selector: "app-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  @Input() item: ProductItem;

  @Output() addtocartevent: EventEmitter<ProductItem> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleAddToCartClick() {
    //alert("Add to cart clicked : " + this.item.title);
    this.addtocartevent.emit(this.item);
  }
}
