import { ViewPostComponent } from './view-post/view-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AllpostComponent } from './allpost/allpost.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  { 
    path: '', 
    component: PostComponent,
    children: [
      {
        path: '',
        component: AllpostComponent
      },
      {
        path: 'edit/:id',
        component: EditPostComponent
      },
      {
        path: ':id',
        component: ViewPostComponent
      },
      {
        path: 'add',
        component: AddPostComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
