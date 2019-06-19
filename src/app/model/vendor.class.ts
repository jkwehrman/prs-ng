export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;
    preapproved: boolean;

    constructor(id:number = 0, code: string = '', name: string = '',
                address: string = '', city: string = '',
                state: string = '', zip: string = "",
                phoneNumber: string = "",
                email: string = "", preapproved: boolean = false) {

    }

    about(): string {
        return "Vendor: id="+this.id+
                ", code="+this.code+
                ", name="+this.name+
                ", add="+this.address+
                ", city="+this.city+
                ", st="+this.state+
                ", zip="+this.zip+
                ", ph="+this.phoneNumber+
                ", em="+this.email+
                ", pre="+this.preapproved;
    }
}
