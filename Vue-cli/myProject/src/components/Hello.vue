<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">

      <h2 v-for="item in items" v-bind:class="{finished: item.isFinished}"
          v-on:click="toggleFinish(item)">
        {{ item.label }}
      </h2>


  </div>
</template>

<script>
  import Store from './store'
  console.log(Store)
  export default {
    name: 'hello',
    data () {
      return {
        title: 'ToDo List',
        items: Store.fetch(),
        newItem: ''
      }
    },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        console.log(this.newItem)
        this.newItem = ''
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
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
  .finished {
    text-decoration: underline;
    text-decoration-color: cornflowerblue;
  }
  .thisIsLiClass {
    text-decoration: underline;
    text-decoration-color: cornflowerblue;
  }
</style>
