var gradebook = {
    _grades: [],
    addGrade: function (newGrade) {
        this._grades.push(newGrade);
    },
    getCountOfGrade: function () {
        return this._grades.length;
    }
}


exports.book = gradebook;