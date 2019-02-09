module.exports = (sequelize, type) => {
        return sequelize.define('menuitems', {
                id: {
                        type: type.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                },
                category : type.STRING,
                description : type.STRING,
                name : type.STRING,
                price : type.INTEGER,
                spicy : type.INTEGER,
                vegetarian : type.INTEGER,
                createdAt: {
                        type: type.DATE,
                        field: 'beginTime',
                        defaultValue: sequelize.literal('NOW()')
                },
                updatedAt :{
                        type: type.DATE,
                        field: 'updatedTime',
                        defaultValue: sequelize.literal('NOW()')
                },
        })
};