import { Component, OnInit } from "@angular/core";
import { Post } from "../../models";

import posts29 from "../../../../assets/TF1-2021-06-29.json";
import posts30 from "../../../../assets/TF1-2021-06-29.json";
import posts01 from "../../../../assets/TF1-2021-06-29.json";
import posts02 from "../../../../assets/TF1-2021-06-29.json";
import posts03 from "../../../../assets/TF1-2021-06-29.json";
import posts04 from "../../../../assets/TF1-2021-06-29.json";
import posts05 from "../../../../assets/TF1-2021-06-29.json";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  posts: Post[] = [];
  data: number[];
  labels: string[];

  constructor() {
    this.posts.push(
      ...posts29[0].posts,
      ...posts30[0].posts,
      ...posts01[0].posts,
      ...posts02[0].posts,
      ...posts03[0].posts,
      ...posts04[0].posts,
      ...posts05[0].posts
    );
  }

  ngOnInit() {
    this.posts.sort((a: any, b: any) => {
      return a.post_date.localeCompare(b.post_date);
    });
    this.getchartData();
  }

  getchartData() {
    this.data = this.posts.map((element: Post) => {
      return element.post_reactions.likes;
      //return element.post_reactions[Object.keys(element.post_reactions)[0]]
    });
    this.labels = this.posts.map((data) => {
      return data.post_date;
    });
  }
}
