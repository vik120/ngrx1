import { ProductService } from './services/product.service';
import { UsersService } from './services/users.service';
import { PostService } from './services/post.service';
import { AirlinesService } from './services/airlines.service';
import { HttpModule } from './services/http.module';
import { HttpService } from './services/http.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SplicetextPipe } from './pipe/splicetext.pipe';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './ngrx/reducers';

@NgModule({
  declarations: [
    AppComponent,
    SplicetextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    HttpModule.forRoot({ environment }),
    StoreModule.forRoot(RootReducer)
  ],
  providers: [
    HttpService,
    AirlinesService,
    PostService,
    UsersService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
