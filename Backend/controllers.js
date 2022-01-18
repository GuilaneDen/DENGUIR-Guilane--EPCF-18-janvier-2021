const People = require('./BDD/people');

exports.postAddPeople = (req, res, next) => {
    People.create({
        name: req.name,
        lastname: req.lastname,
        city: req.city,
        state: req.state,
        phone: req.phone,
        gender: req.gender,
        country: req.country,
    })
    .then((result) => {
        console.log("Created Person");
    })
    .catch((err) => {
        console.log(err);
    });
}