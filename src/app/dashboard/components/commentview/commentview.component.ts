import { Component, Input, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-commentview",
  templateUrl: "./commentview.component.html",
  styleUrls: ["./commentview.component.scss"],
})
export class CommentviewComponent implements OnInit {
  @Input() comment: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comment);
  }
}
