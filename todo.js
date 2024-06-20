let todoList=[
    {
        item: 'Go to School',
        date: '2024-12-04'
    },
    {
        item: 'Shopping',
        date: '2024-12-04'
    },
    ];
displayTodo()
function addtodo()
{
    let inputElement = document.querySelector(`#todo-input`);
    let dateElement = document.querySelector(`#date-input`);
    let todoItem = inputElement.value;
    let dateItem = dateElement.value;
    todoList.push({item:todoItem,date:dateItem});
    inputElement.value = '';
    dateElement.value = '';
    displayTodo()       
}
function displayTodo()
{
    
    let todoContainer = document.querySelector(`#todo-container`);
    let newHtml=''
    for(let i=0; i< todoList.length;i++)
    {
        let {item,date} = todoList[i];
        
        newHtml +=`
        
            <span>${item}</span>
             <span>${date}</span>
            <button class="d-button" onclick="todoList.splice(${i},1);
            displayTodo();">Delete</button>
       `;   
    }
    todoContainer.innerHTML = newHtml;
    
}
