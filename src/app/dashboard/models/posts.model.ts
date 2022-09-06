import { Comment } from "./comment.model";
import { PostReactions } from "./post_reactions.model";
export class Post {
  post_id: string;
  post_date: string;
  post_text: string;
  post_comments: Comment[];
  post_reactions: PostReactions;
}
