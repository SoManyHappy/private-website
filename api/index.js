var express = require('express');
var router = express.Router();

class Api {
    constructor(db){
        this.router = router;
        this.setApi();
    }
    setApi() {
        this.router.get("/hello", (req, res, next) => {
            res.send("hello!!");
        });
    }
    get() {
        return this.router;
    }
}

module.exports = Api;
