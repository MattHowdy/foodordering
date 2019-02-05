const cartcontroller = require('../controllers/cart.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = (router) => {

    /**
     * get all articles
     */
    router
        .route('/articles')
        .get(cartcontroller.getAll);

    /**
     * add an article
     */
    router
        .route('/article')
        .post(multipartWare, cartcontroller.addArticle);

    /**
     * clap on an article
     */
    router
        .route('/article/clap')
        .post(cartcontroller.clapArticle)

    /**
     * comment on an article
     */
    router
        .route('/article/comment')
        .post(cartcontroller.commentArticle)

    /**
     * get a particlular article to view
     */
    router
        .route('/article/:id')
        .get(cartcontroller.getArticle)
}