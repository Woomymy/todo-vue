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
                    console.log(`Removing ${todo.value}`)
                } else {
                let tid = newtodos.length + 1
                newtodos.push({
                    value: todo.value,
                    id: tid
                    })
                }
            })
            this.$emit('todoup', newtodos)
        }
    }

}

</script>
