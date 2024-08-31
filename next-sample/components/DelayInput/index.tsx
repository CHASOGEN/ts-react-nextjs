import React, { useState, useCallback, useRef } from 'react'

type DelayButtonProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props: DelayButtonProps) => {
    const { onChange } = props

    // 入力中かどうかを保持する状態
    const [isTyping,setIsTyping] = useState(false)
    // input に表示するテキストを保持する状態
    const [inputValue, setInputValue] = useState('')
    // span に表示するテキストを保持する状態
    const [viewValue,setViewValue] = useState('')
    // タイマーを表示するRef
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

        const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            // 入力中のフラグをセットする
            setIsTyping(true)
            // input に表示するテキストを更新する
            setInputValue(e.target.value)

            // もし timeRef に以前設定したタイマーがある場合は先に解除する
            if (timerRef.current !== null){
                clearTimeout(timerRef.current)
            }

            timerRef.current = setTimeout(() => {
                timerRef.current = null

                // 入力中のフラグを解除する
                setIsTyping(false)
                // span に表示するテキストを更新する
                setViewValue(e.target.value)
                // onChange コールバックを呼ぶ
                onChange(e)
        },1000)
    },[onChange])

    // span に表示するテキスト
    const text = isTyping ? '入力中 ...' : '入力したテキスト: ${viewValue}'

    return (
        <div>
            {/** data-testid はテスト中だけ使用する ID */}
                <input data-testid="input-text" value={inputValue} onChange={handleChange} />
            <span data-testid="display-text">{text}</span>
        </div>
    )
}