import Forest from './space';
class Hero {
    name: string // 名字
    age: number // 年龄
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    /* 砍树 */
    lumbering(forest: Forest) {
        forest.decreaseWood()
        console.log(this.name, ' 砍了一颗树!');
    }
}

export default Hero
