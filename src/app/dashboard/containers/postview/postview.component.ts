import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Comment, Post } from "../../models";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-postview",
  templateUrl: "./postview.component.html",
  styleUrls: ["./postview.component.scss"],
})
export class PostviewComponent implements OnInit, OnDestroy {
  post: Post;
  comments: Comment[];
  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.postService.post.subscribe((res: any) => {
      this.post = res;
      this.comments = res.post_comments;
    });
  }
  ngOnDestroy() {
    this.postService.post.unsubscribe();
  }
}
