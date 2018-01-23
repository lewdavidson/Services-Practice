import { Injectable } from '@angular/core';

@Injectable()
export class PostService{
  private posts;

  constructor(){
    this.posts = [
      {
        title: 'Post One',
        body: 'This is the body for post one'
      },
      {
        title: 'Post Two',
        body: 'This is the body for post two'
      },
      {
        title: 'Post Three',
        body: 'This is the body for post three'
      }
    ];
  }

  getPosts(){
    return this.posts;
  }

  addPost(newPost){
    this.posts.push(newPost);
  }
}
