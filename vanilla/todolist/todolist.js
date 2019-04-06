const userForm = document.querySelector('.js-userForm'),
      userInput = userForm.querySelector('input'),
      toDoForm = document.querySelector('.js-todoForm'),
      toDoInput = toDoForm.querySelector('input'),
      ul = document.querySelector('.js-todoUl');

const US = "USER",
      TODOS = "ToDos";
let toDos = [];

/*
    user값이 있다면 todolist 작성할 수 있음 
    user값이 없다면 todolist작성못함(alert 띄움)
*/

//user값 저장
/*
1. localstorage에 user값 있으면 hello 출력 후 인풋창 없애기
2. localstorage에 user값 없으면 input값 받기
*/

function paintUser(){
    const userLs = localStorage.getItem(US),
          welcome = userForm.querySelector('p'),
          paintName = welcome.querySelector('span');

    userInput.classList.add('hide')         
    welcome.classList.remove('hide');
    if(/[a-zA-Z]/.test(userLs)){
        paintName.innerHTML = userLs.toUpperCase()
    } else {
        paintName.innerHTML = userLs
    }

}

function submitUser(evnet){
    event.preventDefault();

    const userName = userInput.value;

    if(/[0-9]/.test(userName) || /[~!@#$%^&*()_+|<>?:{}]/.test(userName)){
        alert('영문이나 한글로 입력해주세요')
    } else {
        localStorage.setItem(US,userName);
        paintUser()
    }

    userInput.value = '';

    
}

function loadUser(){
    if(!localStorage.getItem(US)){
        userForm.addEventListener('submit',submitUser);
    }else{
        paintUser()
    }
}

/*
    todo input 보냈을 때 user값이 있으면 저장후렌더링

    없으면 user값 입력
*/


function setStorage(){
    localStorage.setItem(TODOS,JSON.stringify(toDos));
}

function clickDel(){
    event.stopPropagation();
    const currentli = this.parentNode
    const clickli = currentli.id;

    ul.removeChild(currentli);

    let newToDos = toDos.filter(function(i){
        console.log(i.id,parseInt(clickli))
        return i.id !== parseInt(clickli)
    })
    console.log(newToDos)
   toDos = newToDos;

   setStorage(toDos)
    
}
function completeTodo(){
    this.classList.toggle('complete')
}

function paintTodo(text){
    const  idTodo = toDos.length+1
          
    const li = document.createElement('li'),
          btn = document.createElement('button');
    
    li.innerHTML = text;
    li.id = idTodo
    btn.innerHTML = 'Delete'
    
    const toDoObj = {
        todo : text,
        id : idTodo
    }
    toDos.push(toDoObj)
    
    ul.appendChild(li);
    li.appendChild(btn);
    
    li.addEventListener('click',completeTodo)
    btn.addEventListener('click',clickDel)

    setStorage();
}


function loadTodo(){
    const currentTodo = localStorage.getItem(TODOS)
    if(currentTodo){
       const jsonTodo = JSON.parse(currentTodo);
    //    console.log(jsonTodo)
       jsonTodo.forEach(function(i){
            paintTodo(i.todo);
            console.log(i.todo)
       })
    }
}
function submitTodo(event){
    event.preventDefault();

    if(!localStorage.getItem(US)){
        return alert('이름을 입력해주세요')
    } else{
        const current = toDoInput.value;
        paintTodo(current);
        toDoInput.value ='';
    }
}
function init(){
    loadUser();
    loadTodo();
    toDoForm.addEventListener('submit',submitTodo)
}
init()


