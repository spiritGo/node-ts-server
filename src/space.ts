import assets from './assets';

class Space {
    protected name: string
    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}

class Forest extends Space {
    protected assets: assets
    constructor(name: string) {
        super(name)
        this.assets = {
            wood: 100,
            grass: 10000
        }
    }

    getAssets(): assets {
        return this.assets
    }

    increaseWood() {
        this.assets.wood++
    }

    decreaseWood() {
        if (this.assets.wood <= 0) return this.assets.wood = 0
        this.assets.wood--
    }

    increaseGrass() {
        this.assets.grass++
    }

    decreaseGrass() {
        if (this.assets.grass <= 0) return this.assets.grass = 0
        this.assets.grass--
    }
}

export default Forest