export class PR {
    id: number;
    user: string;
    description: string;
    justification: string;
    dateNeeded: string;
    deliveryMode: string;
    status: string;
    total: boolean;
    submittedDate: boolean;
    reasonForRejection: boolean;

    constructor(
        id:number = 0, 
        user: string = '', 
        description: string = '', 
        justification: string = '', 
        dateNeeded: Date = null,
        deliveryMode: string = '',
        status: string = '',
        total: number = 0,
        submittedDate: Date = null, 
        reasonForRejection: string = '')
        {

    }

    about(): string {
        return "Purchase Request: id="+
        this.id+", user="+
        this.user+", discription="+
        this.description+", justification="+
        this.justification+", dateNeeded="+
        this.dateNeeded+", deliveryMode="+
        this.deliveryMode+", status="+
        this.status+", total="+
        this.total+", submittedDate="+
        this.submittedDate+", reasonForRejection="+
        this.reasonForRejection;

    }
}
