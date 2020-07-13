<template>
  <div class="menu3">
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.index">
          <td>
            <router-link :to="'/menu3/' + todo.userId">{{ todo.userId }}</router-link>
          </td>
          <td @click="handleClick(todo.id)">{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ITodo from '@/types/ITodo'

@Component({})
export default class CompMenu3 extends Vue {
  // props
  @Prop({ default: false })
  todos!: ITodo[]

  // methods
  async handleClick(id: number) {
    if (!id) {
      alert('no parameter')
    } else {
      const data: any = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/', { params: { id } })
      console.log(data)
    }
  }
}
</script>
