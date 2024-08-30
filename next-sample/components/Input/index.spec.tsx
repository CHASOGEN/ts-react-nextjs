import { render, screen, RenderResult } from '@testing-library/react'
import { Input } from './index'
import '@testing-library/jest-dom'


// describe で処理をまとめる
describe('Input',() => {
    let renderResult: RenderResult

    // それぞれのテストケース前にコンポーネントを描画し、renderResult にセットする
    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username" />)
    })

    // テストケース実行後に描画していたコンポーネントを開放する
    afterEach(() => {
        renderResult.unmount()
    })

    // 初期画面に input 要素がからであることをテスト
    it('should empty in input on initial render', () => {
        // label が Username であるコンポーネントに対応する input の要素を取得する
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement

        // input 要素の表示が空か確認する
        expect(inputNode).toHaveValue('')
    })
})

