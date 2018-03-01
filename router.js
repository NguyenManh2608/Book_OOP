const express   = require('express');
const Router    = express.Router;
const Book      = require('./book');
const middle    = require('./middleware/middleware');

let router      = new Router();

router.get('/books', (request, response,next) => {
    let repository = request.app.get('book');

    repository.all().then(listBooks => {
        response.json(listBooks);
    }).catch(next);
});

router.get('/book/:id', (request, response,next) => {
    let repository = request.app.get('book');

    repository.search(request.params.id).then(searchBook => {
        response.json(searchBook);
    }).catch(next);
});

router.post('/book',middle.chklength,middle.chkNull,middle.chklengthAuthor, middle.chkNullAuthor
    ,(request, response,next) => {
   let repository =  request.app.get('book');
   let book = new Book(request.body.title);
    book.setPublisher(request.body.publisher);
    book.setAuthor(request.body.author);
    book.setPrice(request.body.price);

   repository.createbook(book).then(savedBook => {
       response.json(savedBook);
   }).catch(next);
});

router.put('/book/:id',middle.chklength,middle.chkNull,middle.chklengthAuthor, middle.chkNullAuthor,
    (request, response, next) => {
    let book = new Book(request.body.title);
    book.setId(request.params.id);
    book.setPublisher(request.body.publisher);
    book.setAuthor(request.body.author);

    let repository = request.app.get('book');
        repository.updatebook(book).then(book => {
        response.json(book);
    }).catch(next);
});

router.delete('/book/:id', (request, response,next) => {
   let repository = request.app.get('book');
        repository.del(request.params.id).then(() => {
        response.send('Delete success');
    }).catch(() => {
            response.send('Delete success');
            next();
        });
});

module.exports = router;
