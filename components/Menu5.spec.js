import { mount } from '@vue/test-utils'
import CompMenu5 from '@/components/Menu5.vue'

describe('components/Menu5', () => {
  // コンポーネントがマウントされたラッパーを作成
  const wrapper = mount(CompMenu5)

  // console.log(wrapper.html());

  // ボタンを取得
  const button = wrapper.find('button')

  // 要素の存在確認
  it('Incrementボタンが存在することを確認', () => {
    // expect(wrapper.contains('.count')).toBe(true)
    // wrapper.find`, `wrapper.findComponent` or `wrapper.get` instead.
    expect(wrapper.find('.count').exists()).toBe(true)
  })

  // イベント実行
  it('Incrementボタンをクリックし、カウントアップされることを確認', () => {
    expect(wrapper.vm.count).toBe(0)
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
