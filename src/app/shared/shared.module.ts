import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { StockPipe } from "./stock.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, StockPipe],
  exports: [FooterComponent, StockPipe]
})
export class SharedModule {}
