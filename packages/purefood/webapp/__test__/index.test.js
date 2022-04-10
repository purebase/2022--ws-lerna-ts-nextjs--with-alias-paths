"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var index_1 = __importDefault(require("../pages/index"));
describe('Index page', function () {
    it('should render elements properly', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, {}));
        expect(react_1.screen.getByText('Custom internal button')).toBeInTheDocument();
        expect(react_1.screen.getByText('Button from ui')).toBeInTheDocument();
    });
});
//# sourceMappingURL=index.test.js.map