module.exports = ()=>{
    const reviewsDB = require('../data/reviews.json')
    const controler = {}

    controler.listreview = (req, res) => res.status(200).json(reviewsDB);

    return controler
}