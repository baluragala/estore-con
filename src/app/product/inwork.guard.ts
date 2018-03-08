import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ManageProductReactiveComponent } from "./manage-product-reactive/manage-product-reactive.component";

@Injectable()
export class InworkGuard
  implements CanDeactivate<ManageProductReactiveComponent> {
  canDeactivate(
    component: ManageProductReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let r = confirm("Would you like to leave?");
    return r;
  }
}
