

module.exports = (sequelize, type) => {
    return sequelize.define('category', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId : type.INTEGER,
        itemId : type.INTEGER
    })
}
