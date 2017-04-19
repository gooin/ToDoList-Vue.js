<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button v-on:click="alertMe">Alert</button>
    <comp></comp>
  </div>
</template>

<script>
  import Comp from './comp.vue'
  export default {
    name: 'hello',
    data () {
      return {
        title: 'ToDo List'
      }
    },
    components: {Comp},
    methods: {
      alertMe: function () {
        alert('Hello')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
