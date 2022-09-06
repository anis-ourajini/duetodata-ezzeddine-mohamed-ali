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
  @Input() data: any;
  lineChartData: any[];
  lineChartLabels: any[];
  public lineChartType: ChartType = 'line';
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.data);
    
    this.lineChartData = this.data.map((e: any) => {
      return e.data;
    });
    this.lineChartLabels = this.data.map((e: any) => {
      return e.label;
    });
  }
  ngOnInit(): void {}
}
