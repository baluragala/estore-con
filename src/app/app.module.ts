import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "./shared/shared.module";
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
