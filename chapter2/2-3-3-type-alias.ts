/*
type Point = {
    x: number;
    y: number;
}

function printPoint(point: Point){
    console.log('X座標は ${point.x} です')
    console.log('y座標は ${point.y} です')
}

printPoint({ x: 100, y: 100})
// 型があっていてもプロパティが異なるとエラー
// printPoint({ z: 100,t: 100})

type Formatter = (a: string) => string

function printName(firstName:string, formatter: Formatter){
    console.log(formatter(firstName))
}

*/