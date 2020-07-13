<template>
  <div class="container">
    <h1>HOME</h1>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/menu1">Menu1</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/menu2">Menu2</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/menu3">Menu3</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/menu4">Menu4</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageIndex extends Vue {}
</script>

<style>
.container {
  text-align: center;
}

.container h1 {
  padding: 1em 0;
}
</style>
