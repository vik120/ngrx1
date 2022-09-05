import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AllpostComponent } from './allpost/allpost.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewPostComponent } from './view-post/view-post.component';


@NgModule({
  declarations: [
    PostComponent,
    AllpostComponent,
    AddPostComponent,
    EditPostComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
