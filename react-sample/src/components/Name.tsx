import React from 'react'

// 名前を入力するためのテキストボックスを返す
const Name = () => {
    // input 要素の onchange イベントに対するコールバック関数を定義します
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 入力されたテキストをコンソールに表示します
        console.log(e.target.value)
    }

    return (
        // style オブジェクトのキーはキャメルケースになります
        <div style={{padding:'16px',backgroundColor: 'gray'}}>
            {/* for の代わりに htmlFor を使います */}
            <label htmlFor="name"> 名前 </label>
            {/* class や oncharge の代わりに、className や onCharge を使います */}
                <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}