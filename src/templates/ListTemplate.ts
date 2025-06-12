import FullListTask from "../model/FullListTask";


interface DOMListTask {
    ul: HTMLUListElement
    clear(): void,
    render(fullList: FullListTask): void,

}


export default class ListTemplate implements DOMListTask{
    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()


    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear():void {
        this.ul.innerHTML=""

    }
    render (fullList: FullListTask): void{
        this.clear()
        fullList.list.forEach(x=>{
            const li = document.createElement("li") as HTMLLIElement
            li.className="item"
            const check = document.createElement("input") as HTMLInputElement
            check.type= "checkbox"
            check.id =  x.id   
            check.tabIndex=0
            check.checked = x.checked   
            li.append(check)

            check.addEventListener('change', ()=>{
                x.checked =!x.checked
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = x.id
            label.textContent = x.tasky
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className ='button'
            button.textContent = 'X'
            li.append(button)

            button.addEventListener('click' , ()=>{
                fullList.removeItem(x.id)
               
                // fullList.save()

                this.render(fullList)
            })
        
        })
    }

}