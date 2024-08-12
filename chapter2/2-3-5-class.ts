
class Point {
    x: number;
    y: number;

    // 引数がない場合の初期値を指定します
    constructor(x:number = 0, y: number = 0){
        this.x = x
        this.y = y
    }

    // 戻り値がない関数を定義するために void を指定します
    moveX(n: number): void {
        this.x += n
    }

    moveY(n: number): void {
        this.y += n
    }
}

const point = new Point()
point.moveX(10)
console.log(`${point.x}`,`${point.y}`) //10,0



class Point3D extends Point {
    z: number

    constructor(x: number = 0,y: number = 0,z: number = 0){
        super(x,y)
        this.z
    }

    moveZ(n: number): void {
        this.z += n
    }
}


const point3D = new Point3D()

// 継承元のメソッドを呼び出すことができます
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x},${point3D.y},${point3D.z}`) // 10,0,20

// 頭のIはインターフェースであることを示すためのもの
interface IUser {
    name: string;
    age: number;
    sayHello: () => string; // 引数なしで文字列を返す
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {

        this.name =""
        this.age = 0
    }

    // インターフェースに定義されているメソッドを実装しない場合、コンパイル時にエラーになります
    sayHello():string {
        return `こんにちは、私は${this.name}、${this.age}歳です`
    }

}

const user = new User()
user.name = `Takuya`
user.age = 36
console.log(user.sayHello()) //`こんにちは私はTakuya、36歳です

class BasePoint3D {
    public x: number;
    private y: number;
    protected z:number;
}

// インスタンス化を行った場合のアクセス制御の例です
const BasePoint = new BasePoint3D
BasePoint.x // OK
// BasePoint.y // プライベートのためアクセスできずにコンパイルエラーがおきます
// BasePoint.z // プライベートのためアクセスできずにコンパイルエラーがおきます

// クラスを継承した際のアクセス制御
class ChildPoint extends BasePoint3D {
    constructor() {
        super()
        this.x // OK
        this.y // コンパイル時にエラーが起きます
        this.z // protected はアクセスできます
    }
}
