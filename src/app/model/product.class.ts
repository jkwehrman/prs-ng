import { Vendor } from "./vendor.class";

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: number;
    name: string;
    price: number;
    unit: string;
    photopath: boolean;
                
    constructor(id:number = 0, vendor: Vendor= new Vendor(), partNumber: number = 0,
                name: string = '', price: number = 0,
                unit: string = '', photopath: boolean = false)
 {

    }

    about(): string {
        return "Product: id="+this.id+
                ", vendor="+this.vendor+
                ", partNumber="+this.partNumber+
                ", name="+this.name+
                ", price="+this.price+
                ", unit="+this.unit+
                ", photopath="+this.photopath;
    }
}
