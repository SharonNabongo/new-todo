const addButton = document.querySelector('.addButton');
var inputValue = document.queryCommandValue('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //Create the item div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input= document.createElement('input');
        input.value = itemName;
        input.disabled= true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('editButton');

        let editButton=document.createElement('button');
        editButton.innerHTML="EDIT";
        editButton.classList.add('editButton');

        let RemoveButton=document.createElement('button');
        RemoveButton.innerHTML="Remove";
        RemoveButton.classList.add('editButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(RemoveButton);

        editButton.addEventListener('click',() => this.edit (input));
        RemoveButton.addEventListener('click',() => this.Remove (itemBox));
    }
    edit(input){
        input.disabled= !input.disabled;
    }
    Remove(item){
        container.removeChild(item);
    }
    }

new item("sport");

function check() {
    if (input.value !=""){
        new item(input.value);
        input.value="";
    }
    
}
    addButton.addEventListener('click',check);
Window.addEventListener('keydown',(e)=>{
    if (e.which ==13) {
        check();
        
    }
})
