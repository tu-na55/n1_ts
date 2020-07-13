<template>
  <div class="container">
    <h1>Nuxt.js Axios</h1>
    <CompMenu3 :todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { $axios } from '@/plugins/axios-accessor'
import CompMenu3 from '@/components/Menu3.vue'
import ITodo from '@/types/ITodo'

@Component({
  components: {
    CompMenu3,
  },
})
export default class PageMenu3Index extends Vue {
  // lifecycle hook
  async asyncData(): Promise<any> {
    const todos: ITodo[] = await $axios.$get('https://jsonplaceholder.typicode.com/todos')
    // console.log(todos);

    return {
      todos,
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}

.container h1 {
  padding: 1em 0;
}

.container table {
  margin: 0 auto;
}
</style>
