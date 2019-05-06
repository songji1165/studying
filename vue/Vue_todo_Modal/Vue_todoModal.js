new Vue({
    el : "#todoWrap",
    data : {
        input : "",
        todos : [],
        modalShow : false,
        resetInput : "",
        resetId : 0
    },
    methods : {
        inputTodo : function(){
            this.todos.push({
                text : this.input,
                complete : false
            });
            this.input = ""
        },
        delTodo : function(index){
            this.todos.splice(index,1);
            console.log(this.todos)
        },
        complete : function(todo){
            console.log(todo);
            todo.complete = !todo.complete
        },
        modalOpen : function(todo,index){
            this.modalShow = true;
            this.resetInput = todo.text,
            this.resetId = index
        },
        modalClose : function(){
            this.modalShow = false
        },
        resetTodo : function(resetInput){
            this.todos[this.resetId].text = resetInput;
            this.modalShow = false
        }
       
    }
})