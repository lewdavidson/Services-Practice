import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService],
})

export class AppComponent {
  title = 'app';
}
