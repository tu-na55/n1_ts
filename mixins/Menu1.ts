import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MixinExample02 extends Vue {
  // data
  data1: string = 'data1'

  // methods
  funcMixin(value: string) {
    alert(this.data1)
    alert(value)
  }

  // lifecycle hooks
  mounted() {
    console.log('mounted')
  }
}
