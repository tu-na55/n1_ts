<template>
  <div class="menu2">
    <h2>Input</h2>
    inputNum：<input v-model.number="inputNum" type="text" />
    <h2>Display</h2>
    <div>count：{{ count }}</div>
    <div>square：{{ square }}</div>
    <div>cube：{{ cube }}</div>
    <h2>Button</h2>
    <div><button @click="handleIncrementCount()">Increment</button></div>
    <div><button @click="handleDecrementCount()">Dencrement</button></div>
    <div><button @click="handleSetCount()">Set</button></div>
    <div><button @click="handleSave()">Save</button></div>
    <div><button @click="handleRestore()">Restore</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { countStore } from '@/store'

@Component({})
export default class CompMenu2 extends Vue {
  // data
  inputNum: number = 1

  // methods
  handleIncrementCount() {
    countStore.incrementCount({ num: this.inputNum })
  }

  handleDecrementCount() {
    countStore.decrementCount({ num: this.inputNum })
  }

  handleSetCount() {
    countStore.setCount({ num: this.inputNum })
  }

  handleSave() {
    countStore.save()
    alert('保存しました')
  }

  handleRestore() {
    countStore.restore()
    alert('復元しました')
  }

  // computed
  get count() {
    return countStore.count
  }

  get square() {
    return countStore.square
  }

  get cube() {
    return countStore.cube
  }
}
</script>
