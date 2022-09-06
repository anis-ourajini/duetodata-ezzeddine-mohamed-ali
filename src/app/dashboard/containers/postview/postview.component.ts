import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-postview",
  templateUrl: "./postview.component.html",
  styleUrls: ["./postview.component.scss"],
})
export class PostviewComponent implements OnInit , OnChanges{
  post: any;
  comments: any[];
  constructor(private postService: PostsService, private router: Router) {}

  ngOnChanges(changes : SimpleChanges){

  }
  ngOnInit(): void {
    this.postService.post.subscribe((res: any) => {
      this.post = res ;
      this.comments = res.post_comments;
    });
   
  }
}
