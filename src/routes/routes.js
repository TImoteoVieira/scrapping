const Controller = require("../controllers/controller");

const controller = new Controller();

module.exports = (router) => {
    router.get('/data', controller.list);
    router.put('/data', controller.update);

}