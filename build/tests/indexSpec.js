"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
it('result expected to be num * 5 ', () => {
    expect((0, index_1.default)(10)).toEqual(50);
});
