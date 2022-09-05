import { Products } from './../../../modal/products';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  productData: Products
 

  constructor(private router: Router, private activeRoute: ActivatedRoute,  
    private productService: ProductService) { 
    this.getData()
  }

  ngOnInit(): void {}

  getData(){ 
    this.activeRoute.paramMap.pipe(
      mergeMap((param:any) => {
        return this.productService.getSingleProduct(param.params.id)
      })
    )
    .subscribe((res:Products) => {
      this.productData = res
    })
  }

}
