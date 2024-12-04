// Router for server to controllers
const vocabBuilder = require('../controllers/vocabController');
module.exports = app => {
    app
        .route('/words') // create route for /words
        .get(vocabBuilder.list_all_words) // call list_all_words from vocabController to get all words
        .post(vocabBuilder.create_a_word);
    app
        .route('/words/:wordId')
        .get(vocabBuilder.read_a_word)
        .put(vocabBuilder.update_a_word)
        .delete(vocabBuilder.delete_a_word);
};
