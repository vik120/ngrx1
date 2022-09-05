import { Post } from './../../../modal/post';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {

  posts: Post[]
  constructor(private postservice:PostService) {
    this.getAllPost()
   }

  ngOnInit(): void {
  }

  getAllPost(){
    this.postservice.allPost().subscribe((res:any) => {
      this.posts = res.posts;
    })
  }

}
