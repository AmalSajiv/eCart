import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")
  constructor(private httpClient:HttpClient) { }

  //api to get all products
  viewAllProduct(){
    const baseURL = "http://localhost:3000/products/"
    return this.httpClient.get(baseURL)
  }

  //api call to get a single product
  viewProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.httpClient.get(baseURL)
  }

   //api call to delete a single product
   deleteProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.httpClient.delete(baseURL)
  }

   //api call for adding new product
   addProduct(productData:any){
    const baseURL = "http://localhost:3000/products/"
    return this.httpClient.post(baseURL,productData)
  }

  //api call for update a product
  updateProduct(productId:any,productData:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.httpClient.put(baseURL,productData)
  }
}