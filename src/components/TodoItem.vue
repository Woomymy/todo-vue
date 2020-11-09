<template>
    <div class="todo" v-bind:id="todo.id"> 
        <li>{{ todo.id }}: {{ todo.value }}</li> <button class="tinybutton" @click="removeTodo(todo.id, todos)">Supprimer</button> 
    
    </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        removeTodo(id) {
            let doc = document.getElementById(id);
            doc.parentNode.removeChild(doc);
        }
    }

}

</script>
