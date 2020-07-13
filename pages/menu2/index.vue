<template>
  <div class="container">
    <h1>Nuxt.js Vuex</h1>
    <CompMenu2 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CompMenu2 from '@/components/Menu2.vue'

@Component({
  components: {
    CompMenu2,
  },
})
export default class PageMenu2Index extends Vue {}
</script>

<style>
.container {
  text-align: center;
}

.container h1 {
  padding: 1em 0;
}
</style>
