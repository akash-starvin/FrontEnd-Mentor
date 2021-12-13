import { Images } from "./images";

export interface Product {
  brand: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: Images[];
}
