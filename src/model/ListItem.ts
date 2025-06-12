export interface Task {
    id : string,
    tasky : string,
    checked: boolean,

}


export default class ListTask implements Task{


   

      constructor(
        private _id: string = '', 
        private _tasky: string = '', 
        private _checked: boolean = false,
    ) {
       
    }
    
    
    get id():string{
        return this._id
    
    }
    set id(id:string){
        this._id=id
    }
    
    get tasky():string{
        return this._tasky
    
    }
    set tasky(tasky:string){
        this._tasky=tasky
    }
    
    get checked():boolean{
        return this._checked
    
    }
    set checked(checked:boolean){
        this._checked=checked
    }
}