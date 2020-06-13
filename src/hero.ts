class Hero {
    name: string // 名字
    age: number // 年龄
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    /* 跑 */
    run() {
        console.log(this.name + ' run');
    }

    /* 走 */
    walk() {
        console.log(this.name + ' walk');
    }

    /* 交谈 */
    talk() {
        console.log(this.name + ' talk');
    }
}

/* 创建人物 */
let hero = new Hero('亚瑟', 200)
hero.run()