import { Component } from '@angular/core';
import { PostService } from '.././post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  private posts;
  private title;
  private body;
  private newPost;

  constructor(private _postService:PostService) {
    this.posts = this._postService.getPosts();
   }

   addPost(){
     this.newPost = {
       title: this.title,
       body: this.body
     }

     this._postService.addPost(this.newPost);
   }
}
