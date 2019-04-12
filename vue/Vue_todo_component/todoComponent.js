
Vue.component("v-modal",{
    template :`
        <div class="modal" v-show="modalShow">
            <input type="text" 
            v-model="input" 
            @keypress.enter="editTodo">
            <button @click="closeModal">CLOSE</button>
        </div>
    `,
    data : function(){
        return {
            input : '',

        }
    },
    props : ['reviceTodo','modalShow'],
    methods : {
        closeModal : function(){
            this.$emit("close-modal")
        },
        editTodo : function(){
            this.$emit("edit-todo",this.input);
        }
    },
    watch : {
        modalShow : function(){
            this.input = this.reviceTodo;
        }
    }

})

new Vue({
    el : "#todoWrap",
    data : {
        input : '',
        todos:[],
        modalShow : false,
        reviceTodo : '',
        editedTodoId : 0
    },
    methods : {
        inputTodo : function(){
            this.todos.push({
                text : this.input,
                done : false
            });
            this.input = "";
        },
        delTodo : function(index){
            this.todos.splice(index,1)
        },
        completeTodo : function(todo){
            todo.done = !todo.done
        },
        editTodo : function(todo,index){
            this.modalShow = true;
            this.reviceTodo = todo.text;
            this.editedTodoId = index
        },
        editedTodo : function(editedTodo){
            this.todos[this.editedTodoId].text = editedTodo;
            this.modalShow = false
        },
        modalToggle : function(){
            this.modalShow = false
        }
    }
})