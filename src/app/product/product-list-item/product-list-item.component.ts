import { Component, OnInit, Input } from "@angular/core";
import { ProductItem } from "../product.interface";

@Component({
  selector: "app-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  @Input() item: ProductItem;
  constructor() {}

  ngOnInit() {}
}
