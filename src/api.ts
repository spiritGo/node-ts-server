class API {
    app: any
    constructor(app: any) {
        this.app = app
    }
    index() {
        this.app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
            res.send('hello index!')
        })
    }
}

export default API