<template>
  <div>
    <h1>LOGIN</h1>
    <form>
      <div class="form-item">
        <label for="email"></label>
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div class="form-item">
        <label for="password"></label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div class="button-panel">
        <input type="button" class="button" title="LOGIN" value="LOGIN" />
      </div>
    </form>
    <div class="form-footer">
      <p>パスワードを忘れた方は<a href="#">こちら</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import Logo from '~/components/Logo.vue'
// import Logo from '@/components/Logo.vue'

@Component({
  // components: {
  //   Logo,
  // },

  layout: 'login',
})
export default class Index extends Vue {}

// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

// export default {
//   components: {
//     Logo,
//     VuetifyLogo,
//   },
// }
</script>
<style>
.container {
  text-align: center;
}

.container h1 {
  padding: 1em 0;
}
</style>
