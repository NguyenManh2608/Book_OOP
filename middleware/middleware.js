exports.chkNull = function (request, response, next) {
    if(!request.body.title) {
       return response.send({ message : "Title must not null"});
    }
    next();
};
exports.chklength = function (request, response, next) {
    if(request.body.title.length > 40) {
        return response.send({message: "Title less more than 40 character"});
    }
    next();
};
exports.chkNullAuthor = function (request , response, next) {
    if(!request.body.author) {
       return response.send({ message : "Author must not null"});
    }
    next();
};
exports.chklengthAuthor = function (request, response, next) {
    if(request.body.author.length > 100) {
        return response.send({message: "Author less more than 100 character"});
    }
    next();
};