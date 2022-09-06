import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ChartType } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data: number[];
  @Input() labels: string[];
  lineChartData: any;
  lineChartLabels: any[];
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public lineChartType: ChartType = "line";
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.lineChartData = [{ data: this.data, label: "custom" }];
    this.lineChartLabels = this.data.map((e: any) => {
      return e.label;
    });
  }
  ngOnInit(): void {
  }
}
