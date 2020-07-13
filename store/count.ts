import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import ICountState from '@/types/ICountState'
import IMyObj from '@/types/IMyObj'

@Module({ stateFactory: true, namespaced: true, name: 'count' })
export default class Count extends VuexModule implements ICountState {
  // state
  COUNT: number = 0

  // getter
  get count(): number {
    return this.COUNT
  }

  get square(): number {
    return this.COUNT * this.COUNT
  }

  get cube(): number {
    return this.COUNT * this.COUNT * this.COUNT
  }

  // mutation
  @Mutation
  INCREMENT_COUNT(payload: IMyObj) {
    this.COUNT += payload.num
  }

  @Mutation
  DECREMENT_COUNT(payload: IMyObj) {
    this.COUNT -= payload.num
  }

  @Mutation
  SET_COUNT(payload: IMyObj) {
    this.COUNT = payload.num
  }

  // action
  @Action({ commit: 'INCREMENT_COUNT' })
  incrementCount(payload: IMyObj) {
    return payload
  }

  @Action({ commit: 'DECREMENT_COUNT' })
  decrementCount(payload: IMyObj) {
    return payload
  }

  @Action({ commit: 'SET_COUNT' })
  setCount(payload: IMyObj) {
    return payload
  }

  @Action({})
  save() {
    const data = {
      num: this.COUNT,
    }
    localStorage.setItem('count-data', JSON.stringify(data))
  }

  @Action({})
  restore() {
    const data = localStorage.getItem('count-data')
    if (data) {
      this.SET_COUNT(JSON.parse(data))
    }
  }
}
