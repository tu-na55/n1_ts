<template>
  <div>
    <h1>LOGIN</h1>
    <form>
      <div class="form-item">
        <label for="email"></label>
        <input v-model="email" type="email" name="email" placeholder="Email Address" />
      </div>
      <div class="form-item">
        <label for="password"></label>
        <input v-model="password" type="password" name="password" placeholder="Password" />
      </div>
      <div class="button-panel">
        <input type="button" class="button" title="LOGIN" value="LOGIN" @click="handleLoginClick()" />
      </div>
    </form>
    <div class="form-footer">
      <p>パスワードを忘れた方は<a href="#">こちら</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { userStore } from '@/store'

@Component({
  // layout
  layout: 'login',
})
export default class PageLoginIndex extends Vue {
  // data
  email: string = ''
  password: string = ''

  // methods
  handleLoginClick() {
    userStore.setUserInfo({ EMAIL: this.email, PASSWORD: this.password })
    this.$router.push('/')
  }
}
</script>

<style>
h1 {
  text-align: center;
  padding: 1em 0;
}

form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #f16272;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.button:hover {
  background: #ee3e52;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}
</style>
