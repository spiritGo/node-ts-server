import API from './api';

class main {
    app: any
    api: any
    constructor(app: any) {
        this.app = app
    }
    
    init() {
        this.api = new API(this.app);
        this.api.index()
    }

}

export default main