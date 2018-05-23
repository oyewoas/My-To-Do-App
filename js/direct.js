//remove and complete words
var removeBot = '<span>delete</span>';
var completeBot = '<span>done</span>';



//user click the add button
//add text in the text field to todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItemTodo(value);
        document.getElementById('item').value;
    }

});
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

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeBot;

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}