class ToDoList {
  
  constructor(title, description, container, maxItems = 30) {
 
     this.itemsLimited = false
     this.itemsCount = 0
     this.title = title;
     this.description = description;
     this.rootContainer = container;
     this.maxItems = maxItems;
     this.render(container);
   }
   
   renderInfo() { // title, description
    const div = document.createElement('div');
     div.classList.add('info');
 
     const title = document.createElement('h1');
     title.innerText = this.title;
     
     const description = document.createElement('h1');
     title.innerText = this.description;
     
     div.append(title, description);
     
     this.container.appendChild(div);
   }
   
   renderItemList(){
     const div = document.createElement('div');
     div.classList.add('item-list');
     this.container.append(div)
     this.itemList = div
     
   }

   renderAddItemSection() { // title, description
    const div = document.createElement('div');
     div.classList.add('add-section');
     div.style.display = "block"
     
     const input = document.createElement('input');
     input.classList.add('Input')
     input.placeholder = "Fill new item";
     input.oninput =  this.returnText.bind(this)
     
     const button = document.createElement('button');
     button.innerText = "Add";
     button.onclick = this.onClickAdd.bind(this)
     button.disabled = true
 
     div.appendChild(input);
     div.appendChild(button);
    
     this.input = input;
     this.div = div
     this.button = button
     this.container.appendChild(div);
   }

createToDoContainer() {
     const div = document.createElement('div');
     div.classList.add('TODOList');
     div.style.display = "block"
     div.style.flexDirection = 'column';
     this.container = div;
     
  }
renderclearbutton (){
  const button1 = document.createElement('button');
  button1.innerText = "Clear";
  button1.onclick = this.onClickClearAllDone.bind(this)


  const button2 = document.createElement('button');
  button2.innerText = "ClearAll";
  button2.onclick = this.onClickClearAll.bind(this)
  this.div.append(button1,button2)
  
 }
 
render(container) {
    this.createToDoContainer();
    this.renderInfo(); // info
    this.renderAddItemSection();
    this.renderItemList()
    this.renderclearbutton ()
    
    this.rootContainer.appendChild(this.container);
  }
   
createItem(){
    let input = document.createElement("input")
    input.classList.add('NewInput')
    input.type = "checkbox"
    
    let p = document.createElement("p")
    p.innerText = this.input.value
    
    this.p = p
    this.input2 = input

   
  return [input,p] 
  }
 
returnText(event){
    let div = document.createElement('div')

    let p = document.createElement('p')
    if (event.target.value === " ") {
      //  this.button.style.backgroundColor = 'red'
       p.innerText = "chi karox linel 0 bar"
       p.style.color = 'red'
       div.append (p)
       this.button.disabled = true
       this.div.append(div)
       this.div2.remove()
    }else  if (event.target.value && !this.itemsLimited){
    this.button.disabled = false
    // delete error
    }
   
  }

onClickAdd() {
   if ( !this.maxItemsfunc()){return}
    let div = document.createElement('div')
        div.style.display = "flex"
        div.style.alignItems = "center"
        div.style.marginTop = '5px'
        this.div2 = div
    const item =  this.createItem() 
    div.append(...item)
    this.itemList.append(div)
    // this.returnText( )
    if(this.input.value){
      this.input.value = " "
      this.button.disabled = true
    }
   this.itemsCount += 1
  //  this.itemList.children.length
  }

maxItemsfunc() {
  if (this.itemsLimited){return false}
   if (this.itemsCount == this.maxItems){
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.innerText = "texer@ lracvats e"
      p.style.color = "red"
      div.append (p)
      this.div.append(div)
      this.button.disabled = true
      return false
    }
    return true
 }
   
   onClickClearAllDone()  {  
    let p =  document.querySelectorAll('.NewInput:checked')
    for (let  i = 0; i < p.length ; i++){
     p[i].parentElement.remove()
     this.itemsCount -= 1
     this.button.disabled = false
     this.div2.remove()
     this.itemsLimited = false
  }
 
}
  

onClickClearAll() {
  let p =  document.querySelectorAll('.NewInput')
  for (let  i = 0; i < p.length ; i++){
  p[i].parentElement.remove()
 }
}

}

 const body = document.querySelector(".bod")
 
 const toDoList1 = new ToDoList(
     "Work",
     "Items to be done in a working day",
     body,
     15
     
 );
 
 const toDoList2 = new ToDoList(
     "Work",
     "Items to be done in a working day",
     body,
     20
 );

 
 
 const toDoList3 = new ToDoList(
  "weekend",
  "Items to be done in a working day",
  body,
  7
);
const toDoList4 = new ToDoList(
  "weekend",
  "arorya",
  body,
  7
);


