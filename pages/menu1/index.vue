<template>
  <div class="container">
    <h1>Nuxt.js ページ・コンポーネント定義</h1>
    <h2>Input</h2>
    <div>inputPropA：<input v-model="inputPropA" type="text" /></div>
    <div>inputPropB：<input v-model.number="inputPropB" type="text" /></div>
    <h2>Display</h2>
    <div>counter：{{ counter }}</div>
    <CompMenu1 :prop-a="inputPropA" :prop-b="inputPropB" @countUp="handleCountUp" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CompMenu1 from '@/components/Menu1.vue'
import IMyObj from '@/models/IMyObj.ts'

@Component({
  components: {
    CompMenu1,
  },
})
export default class PageMenu1Index extends Vue {
  // data
  counter: number = 0
  inputPropA: string = 'test'
  inputPropB: number | null = 10

  // methods
  handleCountUp(payload: IMyObj) {
    this.counter += payload.num
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
</style>
