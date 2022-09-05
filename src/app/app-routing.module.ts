import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { path: 'users', loadChildren: () => import('./layout/user/user.module').then(m => m.UserModule) },
  { path: 'products', loadChildren: () => import('./layout/product/product.module').then(m => m.ProductModule) },
  { path: 'post', loadChildren: () => import('./layout/post/post.module').then(m => m.PostModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
