"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name) {
        return _super.call(this, name) || this;
    }
    Students.prototype.showAge = function (age) {
        console.log("Studying ...");
        _super.prototype.showAge.call(this, 25);
    };
    return Students;
}(person_1.Person));
exports.Students = Students;
//# sourceMappingURL=student.js.map