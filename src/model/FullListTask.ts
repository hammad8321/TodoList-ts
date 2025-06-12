import ListTask from "./ListItem";
interface List {
  list: ListTask[];
  load(): void;
  save(): void;
  clearList(): void;
  addTask(taskObj: ListTask): void;
  removeItem(id: string): void;
}


// export default class FullListTask implements ListTask {

//     static instance: ListTask = new ListTask()

//     private constructor(private _list: ListTask[] = []) { }

//     get list(): ListTask[] {
//         return this._list
//     }

//     load(): void {
//         const storedList: string | null = localStorage.getItem("myList")
//         if (typeof storedList !== "string") return

//         const parsedList: { _id: string, _list: string, _checked: boolean }[] = JSON.parse(storedList)

//         parsedList.forEach(itemObj => {
//             const newListItem = new ListTask(itemObj._id, itemObj._list, itemObj._checked)
//              FullListTask.instance.addTask(ListTask);

           
//         })
//     }

//     save(): void {
//         localStorage.setItem("myList", JSON.stringify(this._list))
//     }

//     clearList(): void {
//         this._list = []
//         this.save()
//     }

//     addTask(itemObj: ListTask): void {
//         this._list.push(itemObj)
//         this.save()
//     }

//     removeItem(id: string): void {
//         this._list = this._list.filter(item => item.id !== id)
//         this.save()
//     }
// }
//_____________________________________________________________________________________________________________

export default class FullListTask implements List {
  static instance: FullListTask = new FullListTask();

  private constructor(private _list: ListTask[] = []) {}
  get list(): ListTask[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parsedList: {
      _id: string;
      _list: string;
      _checked: boolean;
    }[] = JSON.parse(storedList);

    parsedList.forEach((taskObj) => {
      const newListTask = new ListTask(
        taskObj._id,
        taskObj._list,
        taskObj._checked
      );
      FullListTask.instance.addTask(newListTask);


    });
    console.log("list" + this.list)
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this.addTask));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }
  addTask(taskObj: ListTask): void {
    this._list.push(taskObj);

    console.log("taskobj- " + taskObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((x) => x.id! == id);
    this.save();
  }
}
