var book = require("../lib/grade").book;

exports["Can add new grade"] = function (test) {
    book.addGrade(90);
    var count = book.getCountOfGrade();

    test.equal(count, 1);
    test.done();
}