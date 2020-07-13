import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $myFunction(msg: string): void
    $myFunction2(): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $myFunction(msg: string): void
    $myFunction2(): void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $myFunction(msg: string): void
    $myFunction2(): void
  }
}

// eslint-disable-next-line
const myPlugin: Plugin = (context, inject) => {
  inject('myFunction', (msg: string) => console.log(msg))
  inject('myFunction2', () => console.log(context.app.$myConst.test1.b))
}

export default myPlugin
