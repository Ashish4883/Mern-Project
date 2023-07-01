import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit , OnDestroy {
  // posts = [
  //   {title:'First Post',content:`This is the First Post's Content.`},
  //   {title:'Second Post',content:`This is the Second Post's Content.`},
  //   {title:'Third Post',content:`This is the Third Post's Content.`},
  // ];

  posts : Post[] = [];
  private postSub : Subscription;

  constructor(private postService : PostService) {}

  ngOnInit(): void {
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe((posts : Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
