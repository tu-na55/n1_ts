import { Store } from 'Vuex'
import { getModule } from 'vuex-module-decorators'
import Count from '@/store/count.ts'
import User from '@/store/user'

let countStore: Count; // eslint-disable-line
let userStore: User; // eslint-disable-line

function initialiseStores(store: Store<any>): void {
  countStore = getModule(Count, store)
  userStore = getModule(User, store)
}

export { initialiseStores, countStore, userStore }
