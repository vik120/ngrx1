import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any

  constructor( private productService: ProductService) {
    this.getProducts()
   }
  
  ngOnInit(): void {
  }

  getProducts(){
    this.productService.allProduct().subscribe((res:any) => {
      this.products = res.products
    })
  }

}
