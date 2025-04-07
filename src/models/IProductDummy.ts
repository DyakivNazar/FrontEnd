import {IProduct} from "./IProduct.ts";

export interface IProductDummy {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}