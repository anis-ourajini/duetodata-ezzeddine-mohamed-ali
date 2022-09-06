import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../../models";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  fullText = false;
  constructor(private postService: PostsService, private router: Router,private route:ActivatedRoute) {}

  ngOnInit(): void {}
  readMore() {
    this.fullText = !this.fullText;
  }
  visit() {
    this.postService.post.next(this.post);
    
    this.router.navigate(['dashboard/post'])
  }
}
