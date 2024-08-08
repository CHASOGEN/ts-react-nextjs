/*
interface Point {
    x: number;
    y: number;
}

function printPoint(point: Point){
    console.log('x 座標は${point.x}です')
    console.log('y 座標は${point.y}です')
    console.log('z 座標は${point.z}です')
}

interface Point {
    z?: number;
}

// 引数のオブジェクトにzが存在しないためコンパイル時にエラーになります
// printPoint({ x: 100, y:100 })

// 問題なく動作します
printPoint({ x:100, y:100, z:200 })

// クラスがインターフェース implements した際に、z が存在しないためコンパイル時にエラーとなります
// そのため、zをオプショナル(省略可能)なプロパティに変更しました
class MyPoint implements Point {
    x: number;
    y: number;
}

interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

// 複数のインターフェースを継承して新たなインターフェースを定義できます
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: '赤',
    radius: 10
}
*/
