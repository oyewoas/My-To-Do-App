//remove and complete words
var removeBot = '<span>delete</span>';
var completeBot = '<span>done</span>';



//user click the add button
//add text in the text field to todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItemTodo(value);
        document.getElementById('item').value = '';
    }

});

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    //check to add item to completed or readded to to do
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

    // var target;

    // if(id === 'todo'){
    //     //item yet to be completed
    //     target = document.getElementById('completed');
    // } else{
    //     //item completed
    //     target = document.getElementById('completed');

    // }

}
//add new item to todo list
function addItemTodo(text) {
    var list = document.getElementById('todo');
    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeBot;

    //Add click event to remove#
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeBot;

    //Add click event to complete items
    complete.addEventListener('click', completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}