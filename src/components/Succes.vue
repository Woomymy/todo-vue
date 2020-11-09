<template>
    <div class="succes">
  <h3>{{ msg }}</h3>
</div>
</template>

<script>
export default {
    name: "Succes",
    props: {
        msg: String
    }
}
</script>