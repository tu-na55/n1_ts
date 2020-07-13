import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import IUser from '~/types/IUser'

@Module({ stateFactory: true, namespaced: true, name: 'user' })
export default class User extends VuexModule implements IUser {
  // state
  EMAIL: string = ''
  PASSWORD: string = ''

  // getter
  get email(): string {
    return this.EMAIL
  }

  get password(): string {
    return this.PASSWORD
  }

  // mutation
  @Mutation
  SET_USERINFO(payload: IUser) {
    this.EMAIL = payload.EMAIL
    this.PASSWORD = payload.PASSWORD
  }

  @Mutation
  RESET_USERINFO() {
    this.EMAIL = ''
    this.PASSWORD = ''
  }

  // action
  @Action({ commit: 'SET_USERINFO' })
  setUserInfo(payload: IUser) {
    return payload
  }

  @Action({ commit: 'RESET_USERINFO' })
  resetUserInfo() {}
}
