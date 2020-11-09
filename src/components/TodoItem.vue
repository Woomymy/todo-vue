<template>
    <div class="todo" v-bind:id="todo.id"> 
        <li>{{ todo.id }}: {{ todo.value }}</li> <button class="tinybutton" @click="removeTodo(todo.id, todos)">Supprimer</button> 
    </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo', 'todos'],
    methods: {
        removeTodo(id) {
            let doc = document.getElementById(id);
            doc.parentNode.removeChild(doc);
            let newtodos = []
            this.todos.forEach(todo => {
                if(todo.id == id) {
                    return;
                }
                todo.id = newtodos.length + 1
                newtodos.push(todo)
            })
            this.$emit('todoup', newtodos)
        }
    }

}

</script>
