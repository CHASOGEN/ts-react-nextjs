/*

// T はクラス内で利用する仮の名前です
class Queue<T> {
    // 内部に T の型の配列を初期化する
    private array: T:[] = []

    // T の型の値を配列に追加します
    push(item.T) {
        this.array.push(item)
    }

    // T の型の配列最初の値を取り出します
    pop(): T | undefined {
        return this.array.shift()
    }
}

const queue = new Queue<number>() // 数値型を扱うキューを生成します
queue.push(111)
queue.push(112)
queue.push(`hoge`) // number 型ではないのでコンパイル時にエラーになります

let str = `fuga`
str = queue.pop() // str は number 型ではないのでコンパイル時にエラーになります

*/