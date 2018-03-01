class Book {

    /**
     *
     * @param title
     */

    constructor(title){
        this.title = title;
    }


    /**
     *
     *
     */

    getTitle(){
        return this.title;

    }

    /**
     *@return {int|null}
     */

    getId(){
        return this.id;
    }

    /**
     *
     *@param {int} id
     */

    setId(id) {
        return this.id = id;
    }

    /**
     *@param {string} author
     */
    setAuthor(author) {
        this.author = author;
    }

    /**
     * @return {Promise <string>}
     */
    getAuthor() {
        return this.author;
    }
    /**
     *@param {string} publisher
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     *@return {Promise <string>}
     */
    getPublisher() {
        return this.publisher ;
    }
    /**
     *
     * @param {float} price
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     *
     * @return {Promise <void>}
     */
    getPrice() {
       return this.price;
    }
    /**
     *
     * @return {{id: int|*, title: *}}
     */

    toJson() {
        return {
            id : this.id,
            title : this.title,
            author : this.author,
            publisher : this.publisher,
            price : this.price
        }
    }
}
module.exports = Book;
