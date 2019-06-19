export class Product {
    id: number;
    vendorId: number;
    partNumber: number;
    name: string;
    price: number;
    unit: string;
    photopath: boolean;
                
    constructor(id:number = 0, vendorId: number = 0, partNumber: number = 0,
                name: string = '', price: number = 0,
                unit: string = '', photopath: boolean = false)
 {

    }

    about(): string {
        return "Product: id="+this.id+
                ", vendorId="+this.vendorId+
                ", partNumber="+this.partNumber+
                ", name="+this.name+
                ", price="+this.price+
                ", unit="+this.unit+
                ", photopath="+this.photopath;
    }
}
