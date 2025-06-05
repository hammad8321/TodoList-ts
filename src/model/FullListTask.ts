import ListTask from "./ListItem";
interface List {
    list : ListTask[],
    load (): void,
    save(): void,
    clearList(): void,
    addTask(taskObj : ListTask): void,
    removeItem(id: string) : void,
}
export default class FullListTask implements List {
    static instance : FullListTask = new FullListTask();
    
    
    

    constructor( private _list : ListTask[]=[]){ }
get list(): ListTask[]{

    return this._list   
}

load():void{

    const storedList : string | null = localStorage.getItem("myList")
    if(typeof storedList !=="string") return 

    const parsedList : { 
        _id : string , 
        _task :string ,
        _checked :boolean
    }[]=JSON.parse(storedList)

    parsedList.forEach(  taskObj=>{
        const newListTask = new ListTask( 
            taskObj._id, 
            taskObj._task , 
            taskObj._checked)
            FullListTask.instance.addTask(newListTask)
    })

}

save():void {
    localStorage.setItem("myList", JSON.stringify(this.addTask))
}

clearList(): void{
    this._list =[]
    this.save()
}
addTask(taskObj : ListTask): void{
        this._list.push(taskObj)
            this.save()
        

    }
    
removeItem(id: string) : void{
        this._list = this._list.filter(x=>x.id ! ==id)
        this.save()

    }



    
} 