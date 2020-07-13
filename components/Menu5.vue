<template>
  <div class="menu5">
    <div>
      <span class="count">{{ count }}</span>
    </div>
    <div>
      <button @click="handleClick()">Increment</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CompMenu5 extends Vue {
  // data
  count: number = 0

  // methods
  handleClick() {
    this.count++
  }
}
</script>
