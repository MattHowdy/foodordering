const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const ItemModel = require('../models/item');

const config = require('./config');

 const sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

    // DEFINE THE RELATIONSHIP BETWEEN TABLES
    // Cart will be our way of tracking relationship between User and Item models
    // each User can have multiple Items and each Item can have multiple User
    const Cart = sequelize.define('cart', {});
    const Item = ItemModel(sequelize, Sequelize);
    const User = UserModel(sequelize, Sequelize);

    User.belongsToMany(Item, { through: Cart, unique: false });
    Item.belongsToMany(User, { through: Cart, unique: false });

    // set to true to wipe out the db
    sequelize.sync({ force: false })
        .then(() => {
            console.log(`Database & tables created!`)
        });


    module.exports = {
        User,
        Cart,
        Item
    };