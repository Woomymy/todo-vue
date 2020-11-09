<template>
    <div class="error">
  <h3>{{ msg }}</h3>
</div>
</template>

<script>
export default {
    name: "Error",
    props: {
        msg: String
    }
}
</script>