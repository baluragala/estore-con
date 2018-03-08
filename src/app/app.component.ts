import { Component, ViewEncapsulation } from "@angular/core";
import { ProductItem } from "./product/product.interface";
import { ProductService } from "./product/product.service";
import { Productv2Service } from "./product/productv2.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "application-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "angular";
  tagline = "Electronic store";

  headerOptions = {
    color: "red",
    background: "yellow"
  };

  getTitle() {
    return this.title;
  }

  handleClick(e) {
    console.log(e);
    alert("Clicked");
  }

  handleAddToCartEvent(item: ProductItem) {
    console.log(
      "AppComponent (parent) receieved event from ProductListItem(child)",
      item
    );
  }

  constructor() {
    // rxjs
    // let s1, s2;
    // let source$ = Observable.create(function(observer) {
    //   let counter = 0;
    //   let h = setInterval(function() {
    //     observer.next(++counter);
    //     if (counter == 2) {
    //       observer.error("something went wrong");
    //     }
    //     if (counter == 5) {
    //       clearInterval(h);
    //       observer.complete();
    //       observer.next(100);
    //     }
    //   }, 1000);
    // });
    // s1 = source$.subscribe(
    //   function(data) {
    //     console.log("O1", data);
    //     if (data == 2) {
    //       s1.unsubscribe();
    //     }
    //   },
    //   function(err) {
    //     console.error(err);
    //   },
    //   function() {
    //     console.log("O1 - completed");
    //   }
    // );
    // s2 = source$.subscribe(
    //   function(data) {
    //     console.log("O2", data);
    //   },
    //   function(err) {
    //     console.error(err);
    //   },
    //   function() {
    //     console.log("O2- completed");
    //   }
    // );
    //Observable.from([1, 2, 3, 4, 5]).subscribe(d => console.log(d));
    //Observable.of([1, 2, 3, 4, 5]).subscribe(d => console.log(d));
    // Observable.interval(1000)
    //   .take(10)
    //   .map(d => d + 1)
    //   .filter(d => d % 5 == 0)
    //   .subscribe(d => console.log(d));

    Observable.from([1, 2, 3, 4, 5]).subscribe(d => console.log(d));
    Observable.range(0, 20)
      .map(d => d + 1)
      .filter(d => d % 5 == 0)
      .subscribe(d => console.log(d));
  }
}
