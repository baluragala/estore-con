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
import { ProductService } from "./product.service";
import { Productv2Service } from "./productv2.service";
import { environment } from "../../environments/environment";
import { HttpClientModule } from "@angular/common/http";

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
    ]),
    HttpClientModule
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
  ],
  providers: [
    { provide: ProductService, useClass: ProductService },
    { provide: "API_TOKEN", useValue: "ws23%^^dhetge(*&t" },
    { provide: "CLIENT_ID", useValue: "CLNT12ded56g34" }
    // {
    //   provide: ProductService,
    //   useFactory: function() {
    //     if (environment.production) {
    //       return new Productv2Service();
    //     } else {
    //       return new ProductService();
    //     }
    //   }
    // }
  ]
})
export class ProductModule {}
