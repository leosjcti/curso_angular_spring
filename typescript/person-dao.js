"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        return true;
    };
    PersonDao.prototype.update = function (person) {
        return true;
    };
    PersonDao.prototype.delete = function (number) {
        return true;
    };
    PersonDao.prototype.find = function (number) {
        return null;
    };
    PersonDao.prototype.findAll = function () {
        return null;
    };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map