 import './css/style.css'


 import FullListTask  from './model/FullListTask'


import ListTask from './model/ListItem'

import ListTemplate from './templates/ListTemplate'



const initApp =():void => {

    const fullList = FullListTask.instance
    const template = ListTemplate.instance


    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    
    itemEntryForm.addEventListener("submit", (event: SubmitEvent):void=>{
        event.preventDefault()
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText : string = input.value.trim()

        console.log("enter valur" + newEntryText)
        

        if(!newEntryText.length) return 

        const itemId : number = fullList.list.length
        ? parseInt(fullList.list[fullList.list.length-1].id) +1
        :1

        const newTask = new ListTask(itemId.toString(), newEntryText)
        console.log ("task-"+ newTask)
        fullList.addTask(newTask)

        template.render(fullList)

         console.log("hammad"+fullList)




    })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    template.clear()
  })



  //  const clearItem = document.getElementById("clearItem") as HTMLButtonElement

    // clearItem.addEventListener('click', (): void =>{
    //     fullList.clearList()
    //     template.clear()
        
    // })
     fullList.load()
     template.render(fullList)

}


document.addEventListener("DOMContentLoaded", initApp) 



 //  https://www.youtube.com/watch?v=61v23Ce5SXA&ab_channel=DaveGray