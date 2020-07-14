<template>
  <div class="container">
    <h1>Nuxt.js Axios Detail UserId：{{ id }}</h1>
    <CompMenu3 :todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { $axios } from '@/plugins/axios-accessor'
import CompMenu3 from '@/components/Menu3.vue'
import ITodo from '@/models/ITodo'

@Component({
  components: {
    CompMenu3,
  },
})
export default class PageMenu3Index extends Vue {
  // data
  id: string | null = null

  // lifecycle hooks
  async asyncData(ctx: Context): Promise<any> {
    // console.log(ctx.params.id);

    const todos: ITodo[] = await $axios.$get('https://jsonplaceholder.typicode.com/todos', { params: { userId: ctx.params.id } })
    // console.log(todos);

    return {
      todos,
    }
  }

  created() {
    this.id = this.$route.params.id
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
