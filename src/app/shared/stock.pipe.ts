import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stockmeasure"
})
export class StockPipe implements PipeTransform {
  transform(value: any, measureType: any): any {
    if (value > 1) {
      return value + " " + measureType + "s";
    } else {
      return value + " " + measureType;
    }
  }
}
