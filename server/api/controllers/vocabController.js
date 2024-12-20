// Handles Api logic for CRUD

const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.list_all_words = function(req, res) {
    Vocab.find({}, function(err, words) {
        if (err) return res.send(err);
        res.json(words);
    });
};

exports.create_a_word = function(req, res) {
    const newWord = new Vocab(req.body);
    newWord.save(function(err, word) {
        if (err) return res.send(err);
        res.json(word);
    });
};

exports.read_a_word = function(req, res) {
    Vocab.findById(req.params.wordId, function(err, word) {
        if (err) return res.send(err);
        res.json(word);
    });
};

exports.update_a_word = function(req, res) {
    Vocab.findOneAndUpdate({_id: req.params.wordId}, req.body, {new: true}, (err, word) => {
        if (err) return res.send(err);
        res.json(word);
    }); 
};

exports.delete_a_word = function(req, res) {
    Vocab.deleteOne({_id: req.params.wordId}, function(err) {
        if (err) return res.send(err);
        res.json({
            message: 'Word successfully deleted',
            _id: req.params.wordId
        });
    });
};
