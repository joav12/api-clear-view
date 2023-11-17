module.exports = app => {
    const controller = require('../controllers/reviews')();

    app.route('/api/v1/previews')
    .get(controller.listreview);
}