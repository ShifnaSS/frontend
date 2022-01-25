import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductDatas : ProductModel[];
  constructor(private _add:ProductService){
    this.ProductDatas = [];
  }
 
  ngOnInit(): void {
    this._add.getproduct()
    .subscribe(data=>
      {
        
        this.ProductDatas = JSON.parse(JSON.stringify(data));
        console.log(this.ProductDatas,"for product list")
      })
    // this._add.getproduct().subscribe((data=>{
    //   this.ProductData = JSON.parse(JSON.stringify(data));;
    //   console.log("productdata"+this.ProductData);
    //   })
  }

}
