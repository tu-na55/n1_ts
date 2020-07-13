<template>
  <div class="container">
    <h1>Nuxt.js プラグイン</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({})
export default class PageMenu3Index extends Vue {
  // lifecycle hook
  async asyncData(ctx: Context): Promise<any> {
    await ctx.app.$myFunction('call from asyncData')
    await ctx.app.$myFunction2()
    console.log(ctx.app.$myConst.test2.a)
    ctx.app.$myConst.test2.func('AAA')
  }

  mounted() {
    this.$myFunction('call from mounted')
    this.$myFunction2()
    console.log(this.$myConst.test1.a)
    this.$myConst.test1.func('aaa')
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
