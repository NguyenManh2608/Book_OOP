class BookRepository {
    /**
     *@param connection
     */
        constructor(connection) {
            this.connection = connection;
    }
    /**
     *@param {Book} book
     *@return {Promise <void>}
     */

    updatebook(book) {
        return this.connection('Books')
            .update({ title     : book.getTitle(), id           : book.getId(),
                      author    : book.getAuthor(), publisher   : book.getPublisher(),
                      price     : book.getPrice()
            })
            .where({id: book.getId()});
    }
    createbook(book) {
         return this.connection('Books')
            .insert({ title     : book.getTitle(),
                      author    : book.getAuthor(),
                      publisher : book.getPublisher(),
                      price     : book.getPrice()
            })
            .then( insertedIds => {
            book.setId(insertedIds[0]);
        });
    }

    /**
     *@return {Promise <Book[]>}
     */

    all() {
        return this.connection('Books').select().then(book => { return book});

    }

    /**
     *@param {int} id
     * @return {Promise <void>}
     */

    del(id) {
        return this.connection('Books').update({
            delete_at : new Date().getDate()
        }).where ({
            id : id
        });
    }

    /**
     *
     * @param id
     * @return {Book}
     */
    search(id) {
        return this.connection('Books').select().where({
            id : id
        })
    }
}
module.exports = BookRepository;