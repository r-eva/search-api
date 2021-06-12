const { tours } = require('../database/activities.json')

module.exports = {
    getAllTour: (req, res) => {
        res.status(200).send(tours)
    },
    filterTour: (req, res) => {
        const { title, price, rating, isSpecialOffer } = req.query     
        let results = [...tours]
        if (title) {
            results = results.filter(r => r.title.toLowerCase().includes(title.toLowerCase()))
        }
        if (price) {
            results = results.filter(r => Number(r.price) <= Number(price))
        }
        if (rating) {
            results = results.filter(r => Number(r.rating) >= Number(rating))
        }
        
        let test = (isSpecialOffer === 'true');

        if(test){
            results = results.filter(r => r.isSpecialOffer === true);
        }
        
        res.json(results)
    }  
}