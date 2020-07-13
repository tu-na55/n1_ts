import { Middleware, Context } from '@nuxt/types'
import { userStore } from '@/store'

const routeLog: Middleware = (ctx: Context) => {
  if (userStore.email !== '' && userStore.password !== '') {
    if (process.client) {
      console.log('=== Route Info Start ===')
      console.log(`${ctx.from.fullPath} ⇒ ${ctx.route.fullPath}`)
      console.log({ from: ctx.from })
      console.log({ route: ctx.route })
      console.log('=== Route Info End ===')
      console.log('=== User Info Start ===')
      console.log({ email: userStore.email })
      console.log({ password: userStore.password })
      console.log('=== User Info Start ===')
    }
  } else {
    console.log('Not Login!!')
    return ctx.redirect('/login')
  }
}

export default routeLog
