import { User } from "./user";


export class Reimbursement {

    constructor(public id:number, public status:string, public author:User, public amount:number, public resolver?:User){

    }
}
