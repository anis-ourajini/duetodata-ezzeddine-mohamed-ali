import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { Comment } from "../../models";

@Component({
  selector: "app-commentview",
  templateUrl: "./commentview.component.html",
  styleUrls: ["./commentview.component.scss"],
})
export class CommentviewComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comment);
  }
}
