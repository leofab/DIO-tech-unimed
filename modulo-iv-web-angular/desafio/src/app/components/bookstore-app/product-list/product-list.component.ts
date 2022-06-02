import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any = [];
  productListService: ProductListService;

  constructor( productListService: ProductListService) {

    this.productListService = productListService;
   }

  ngOnInit(): void {
    
    this.livros = this.productListService.getBook().subscribe((data) => {
      this.livros = data;
      console.log(this.livros);
      
    })

  }

}
