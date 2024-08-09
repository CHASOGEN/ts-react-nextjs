/*
const Direction = {
    'Up': 0,
    'Down': 1,
    'Left':2,
    'Right':3
}


enum Direction {
    Up,
    Down,
    Left,
    Right
}


// enum Direction を参照
let direction: Direction = Direction.Left
// 2 という数字が出力されます
console.log(direction)

// enum を代入した変数に別の型を代入しようとするとエラーになります
// direction = 'Left' // string を入れようとするとエラー

*/

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// 例えば API のパラメータとして文字列が渡されたケースを想定します
const value = 'DOWN'
// 文字列から Enum 型に変換します
const enumValue = value as Direction

if (enumValue === Direction.Down){
    console.log('Down is selected')
}
