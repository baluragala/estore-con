import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ManageProductReactiveComponent } from "./manage-product-reactive/manage-product-reactive.component";
import { ProductService } from "./product.service";

@Injectable()
export class InworkGuard
  implements CanDeactivate<ManageProductReactiveComponent> {
  constructor(private service: ProductService) {}
  canDeactivate(
    component: ManageProductReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.service.isFormDirty()) {
      alert("You would lose your work, please save form");
      return false;
    } else {
      return true;
    }
  }
}
