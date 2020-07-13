import { Plugin } from '@nuxt/types'
import test1 from '@/const/const1'
import test2 from '@/const/const2'

declare module 'vue/types/vue' {
  interface Vue {
    $myConst: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $myConst: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $myConst: any
  }
}

const myConst = {
  test1,
  test2,
}

// eslint-disable-next-line
const myPlugin: Plugin = (context, inject) => {
  inject('myConst', myConst)
}

export default myPlugin
