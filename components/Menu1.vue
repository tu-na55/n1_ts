<template>
  <div class="menu1">
    <h3>Input</h3>
    <div>inputValue：<input v-model="inputValue" type="text" /></div>
    <div>inputNum：<input v-model.number="inputNum" type="text" /></div>
    <div>
      flgVisible：
      <input id="true" v-model.number="flgVisible" type="radio" value="1" /><label for="true"> True</label>
      <input id="false" v-model.number="flgVisible" type="radio" value="0" /><label for="false"> False</label>
    </div>
    <h3>data</h3>
    <div>inputValue：{{ inputValue }}</div>
    <div>flgVisible：{{ flgVisible }}</div>
    <h3>props</h3>
    <div>propA：{{ propA }}</div>
    <div>propB：{{ propB }}</div>
    <h3>methods</h3>
    <button @click="handleClick()">ボタン1</button>
    <button @click="handleClick('123')">ボタン2</button>
    <h3>computed</h3>
    <div>square：{{ square }}</div>
    <div>cube：{{ cube }}</div>
    <h3>watch</h3>
    <div>watchInputValue：{{ watchInputValue }}</div>
    <h3>filters</h3>
    <div>convUpperCase：{{ inputValue | convUpperCase }}</div>
    <h3>mixins</h3>
    <button @click="funcMixin('mixin')">ボタン</button>
    <h3>emit</h3>
    <button @click="handleCountUp()">親コンポーネントのイベント</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from 'nuxt-property-decorator'
import mixin from '@/mixins/Menu1.ts'

@Component({
  // mixins
  mixins: [mixin],

  // filters
  filters: {
    convUpperCase(value: string): string | null {
      if (!value) return ''
      return value.toUpperCase()
    },
  },
})
export default class CompMenu1 extends Vue {
  // props
  @Prop({ default: false })
  propA!: string

  @Prop({ default: 100 })
  propB?: number

  // data
  inputValue: string = '0'
  inputNum: number = 1
  flgVisible: number = 0
  watchInputValue: string = '0'

  // methods
  // ボタンクリック時
  handleClick(msg: string) {
    if (!msg) msg = 'no parameter'
    alert(msg)
  }

  // lifecycle hooks
  created() {
    console.log('created')
  }

  // computed
  get square() {
    const num: number = this.propB as number
    return num * num
  }

  get cube() {
    const num: number = this.propB as number
    return num * num * num
  }

  // watch
  @Watch('inputValue')
  onInputValueChange(newValue: string, oldValue: string) {
    this.watchInputValue = `${oldValue} -> ${newValue}`
  }

  // emit
  @Emit('countUp')
  handleCountUp() {
    return { num: this.inputNum }
  }
}
</script>
