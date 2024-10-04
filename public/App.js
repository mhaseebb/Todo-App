var list = document.getElementById("list");

function addtodo() {

    var todo_item = document.getElementById("todo_item")

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value))
    console.log(li)


    var deleteButton = document.createElement("button") ;
    var deltext = document.createTextNode('Delete');
deleteButton.setAttribute("onclick","deleteall(this)")
  
    deleteButton.appendChild(deltext);
    li.appendChild(deleteButton);



var editbtn=document.createElement("button");
var edittext=document.createTextNode("Edit")
editbtn.setAttribute("onclick","edititems(this)")

editbtn.appendChild(edittext); 

li.appendChild(editbtn);
console.log(li)
    list.appendChild(li);
}


function deleteall(e){
e.parentNode.remove()
}

function edititems(e){
console.log(e.parentNode.firstChild)
var value=e.parentNode.firstChild.nodeValue;
var aditedvalue = prompt("Enter edit your value",value)
e.parentNode.firstChild.nodeValue=aditedvalue
} 

function deleteallitems(){
list.innerHTML=""

}