const config = require('../config');
let Request = require("request");

const appRouter = (app) => {
    Request.get("http://api.nobelprize.org/v1/prize.json", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }

       DATA = JSON.parse(body);

        //GET ALL NOBELPRIZES
        app.get('/', (req, res) => {
            console.log('Get all nobelprizes');

            if( DATA) {
                res.send({
                    status: config.STATUS.OK,
                    message: DATA.prizes,
                });

            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any nobelprizes',
                });
            }
        });

        // GET nobelprize winner DETAILS
        app.get('/nobelprizeWinner/:id', (req, res) => {
            console.log('Get NobelprizeWinner', req.params.id);

            const nameWinner = DATA.prizes.reduce((filtered, prize) => {
                const laureate = prize.laureates.filter((laureate) => laureate.id === req.params.id)[0];
                if (laureate) { filtered.push(laureate); }
                return filtered;
            },[])[0];

            if(nameWinner) {
                res.send({
                    status: config.STATUS.OK,
                    message: nameWinner,
                });

            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any nobelprize winner',
                });
            }
        });

        // UPDATE NobelprizeWInner
        app.put('/nobelprizeWinner/:id', (req, res) => {

            console.log('update nobelprize winner', req.body);

            const nameWinner = DATA.prizes.reduce((filtered, prize) => {
                const laureate = prize.laureates.filter((laureate) => laureate.id === req.params.id)[0];
                if (laureate) { filtered.push(laureate); }
                return filtered;
            },[])[0];

            if(nameWinner) {
                console.log("updating");

                DATA.prizes = DATA.prizes.map((prize) =>{
                    prize.laureates = prize.laureates.map((laureate) => {
                        return(''+ laureate.id) === req.params.id ? req.body : laureate;
                        });
                    return prize
                });

                res.send({
                    status: config.STATUS.OK,
                    message: req.body,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find nobelprize winner for update',
                });
            }
        });

        // REMOVE nobelprize winner
        app.delete('/nobelprizeWinner/:id', (req, res) => {
            console.log('Remove nobelprize winner', req.params.id);

            DATA.prizes = DATA.prizes.map(prize =>{
                prize.laureates = prize.laureates.filter(laureate => ('' + laureate.id) !== req.params.id);
                return prize;
            });

            res.send({
                status: config.STATUS.OK,
                message: 'nobelprize winner removed',
            });
        });
    });
};

module.exports = appRouter;