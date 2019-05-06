/*
    STACK 
        : 뒤로 데이터를 추가하고 뒤에 있는 것부터 빼낼 수 있다.
    1. 데이터를 저장하는 공간을 갖는다.
    2. push라는 함수는 데이터에 값을 저장한다
    3. pop함수는 값을 뺀다 맨뒤로 뺀다
    4. peek함수는 맨뒤에 있는 값을 보여준다.
*/


var stack = [];

push('song')
push('choi')
push('lee')

function push(a) {
    stack.push(a)
}

console.log('push후 stack : ', stack)


function pop() {
    var data = stack.pop();
    peek(data)
}

pop()

function peek(a) {
    console.log('stack에서 빼낸 값은 ', a)
    console.log('stack은', stack)
}