import {Component, OnInit} from '@angular/core';
import { ProductsServices } from 'src/app/core/services/product.services';

@Component({
  selector: 'viewproduct',
  templateUrl: './productview.component.html'
})
export class ViewProductComponent implements OnInit {
  listproduct: any
  constructor(
    private productsServices: ProductsServices
  ) {
    

  }
  ngOnInit() {
    this.productsServices.getListProducts().subscribe(res => {
      this.listproduct = res
      // this.listproduct.forEach(element => {
      //   element["stt"] = 
      // });
      for(let i = 0; i<this.listproduct.length; i++){
        this.listproduct[i]["stt"] = i+1
        this.listproduct[i]["style"] = this.listproduct[i].progress + "%";
        if(this.listproduct[i].progress < 40){
          this.listproduct[i]["class"] = "progress-bar bg-danger"
        }else if(this.listproduct[i].progress < 60){
          this.listproduct[i]["class"] = "progress-bar bg-warning"
        }else if(this.listproduct[i].progress < 80) {
          this.listproduct[i]["class"] = "progress-bar bg-info"
        }else{
          this.listproduct[i]["class"] = "progress-bar bg-success"
        }
      }
      console.log(this.listproduct)
    })
  }
}

