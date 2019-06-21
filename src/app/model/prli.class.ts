export class Prli  {

    id: number;
    PurchaseRequestID: number;
    product: string;
    quantity: string;

    constructor(
        id:number =0,
		purchaseRequest:number =0,
		product:string ="",
        quantity:string ="")
        {}
    

    about(): string {
        return "Purchase Request Line Items: id="+
        this.id+", purchaseRequestID="+
        this.PurchaseRequestID+", product="+
        this.product+", quantity="+
        this.quantity;

    }
}