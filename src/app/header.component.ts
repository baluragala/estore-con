import { Component, ViewEncapsulation, Input } from "@angular/core";

/*
1. class
2. metadata
3. template
*/

interface Options {
  color: string;
  background: string;
}

@Component({
  selector: "custom-header",
  template: `
    <header>
        <h1 class="main-header" style="text-align:center">{{mainTitle}}</h1>
        <h3 style="text-align:center">{{subTitle}}</h3>
        <nav>
          <ul>
            <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>
        </nav>
    </header>
  `,
  styles: [
    `
    .main-header {
      color:purple
    }
  `,
    `
    header{
      background-color:lightgrey;
      padding:10px;
    }
  `,
    `
  .active {
    color:red;
    background-color:yellow;
  }`
  ]
})
export class HeaderComponent {
  @Input() mainTitle: string;
  @Input() subTitle: string;
  @Input() options: Options;

  ngOnChanges() {
    console.log(typeof this.options);
    console.log(this.options);
  }
}
